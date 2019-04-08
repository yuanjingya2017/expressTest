// var config = require('./config');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// todo morgan
// var logger = require('morgan');

// require('./models');
var webRouter = require('./web_router');
// var apiRouterV1 = require('./api_router_v1');

var app = express();

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// configuration in all env
app.set('views', path.join(__dirname, 'views'));
// todo 修改模板
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use('/api/v1', cors(), apiRouterV1);
app.use('/', webRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
