var config = require('./config');
require('colors');

var path = require('path');
var Loader = require('loader');
var LoaderConnect = require('loader-connect')
var express = require('express');

// require('./middlewares/mongoose_log'); // 打印 mongodb 查询日志
require('./models');
var webRouter = require('./web_router');
var apiRouterV1 = require('./api_router_v1');
var _ = require('lodash');
var csurf = require('csurf');
var compress = require('compression');
var bodyParser = require('body-parser');
var busboy = require('connect-busboy');
var errorhandler = require('errorhandler');
var cors = require('cors');
// var requestLog = require('./middlewares/request_log');
// var logger = require('./common/logger');
var helmet = require('helmet');
var bytes = require('bytes')


// 静态文件目录
var staticDir = path.join(__dirname, 'public');
// assets
var assets = {};

var urlinfo = require('url').parse(config.host);
console.log(urlinfo, 'what is require url');
config.hostname = urlinfo.hostname || config.host;

var app = express();

// configuration in all env
app.set('views', path.join(__dirname, 'views'));
// todo 修改模板
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';
app.enable('trust proxy');

// Request logger。请求时间
// app.use(requestLog);

if (config.debug) {
  // 渲染时间
  app.use(renderMiddleware.render);
}

// 静态资源
if (config.debug) {
  app.use(LoaderConnect.less(__dirname)); // 测试环境用，编译 .less on the fly
}
app.use('/public', express.static(staticDir));

// 通用的中间件
app.use(require('response-time')());
// todo what is helmet
app.use(helmet.frameguard('sameorigin'));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(require('method-override')());
app.use(require('cookie-parser')(config.session_secret));
app.use(compress());


if (!config.debug) {
  app.use(function (req, res, next) {
    if (req.path === '/api' || req.path.indexOf('/api') === -1) {
      csurf()(req, res, next);
      return;
    }
    next();
  });
  app.set('view cache', true);
}

// for debug
// app.get('/err', function (req, res, next) {
//   next(new Error('haha'))
// });

// set static, dynamic helpers
_.extend(app.locals, {
  config: config,
  Loader: Loader,
  assets: assets
});

_.extend(app.locals, require('./common/render_helper'));
app.use(function (req, res, next) {
  res.locals.csrf = req.csrfToken ? req.csrfToken() : '';
  next();
});

app.use(busboy({
  limits: {
    fileSize: bytes(config.file_limit)
  }
}));

// routes
app.use('/api/v1', cors(), apiRouterV1);
app.use('/', webRouter);

// error handler
if (config.debug) {
  app.use(errorhandler());
} else {
  app.use(function (err, req, res, next) {
    console.log(err);
    return res.status(500).send('500 status');
  });
}

if (!module.parent) {
  app.listen(config.port, function () {
    console.log('NodeClub listening on port', config.port);
    console.log('God bless love....');
    console.log('You can debug your app with http://' + config.hostname + ':' + config.port);
    console.log('');
  });
}

module.exports = app;
