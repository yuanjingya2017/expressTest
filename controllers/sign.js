var validator      = require('validator');
// var eventproxy     = require('eventproxy');
var config         = require('../config');
var mail           = require('../common/mail');
var tools          = require('../common/tools');
// var utility        = require('utility');
// var authMiddleWare = require('../middlewares/auth');
var uuid           = require('node-uuid');
// var User           = require('../proxy').User;

//sign up
exports.showSignup = function (req, res) {
  res.render('sign/signup', {name: 1});
};

exports.signup = function (req, res, next) {
  var loginname = validator.trim(req.body.loginname).toLowerCase();
  var email     = validator.trim(req.body.email).toLowerCase();
  var pass      = validator.trim(req.body.pass);
  var rePass    = validator.trim(req.body.re_pass);
  console.log(loginname, email, pass, rePass)
  res.render('sign/signup', {
    code: 1,
    loginname: loginname,
    email: email,
    pass: pass,
    rePass: rePass
  })
  // var ep = new eventproxy();
  // ep.fail(next);
  // ep.on('prop_err', function (msg) {
  //   res.status(422);
  //   res.render('sign/signup', {error: msg, loginname: loginname, email: email});
  // });

  // // 验证信息的正确性
  // if ([loginname, pass, rePass, email].some(function (item) { return item === ''; })) {
  //   ep.emit('prop_err', '信息不完整。');
  //   return;
  // }
  // if (loginname.length < 5) {
  //   ep.emit('prop_err', '用户名至少需要5个字符。');
  //   return;
  // }
  // if (!tools.validateId(loginname)) {
  //   return ep.emit('prop_err', '用户名不合法。');
  // }
  // if (!validator.isEmail(email)) {
  //   return ep.emit('prop_err', '邮箱不合法。');
  // }
  // if (pass !== rePass) {
  //   return ep.emit('prop_err', '两次密码输入不一致。');
  // }
  // // END 验证信息的正确性
  // // getUser
};

/**
 * Show user login page.
 *
 * @param  {HttpRequest} req
 * @param  {HttpResponse} res
 */
exports.showLogin = function (req, res) {
  req.session._loginReferer = req.headers.referer;
  res.render('sign/signin');
};

/**
 * define some page when login just jump to the home page
 * @type {Array}
 */
var notJump = [
  '/active_account', //active page
  '/reset_pass',     //reset password page, avoid to reset twice
  '/signup',         //regist page
  '/search_pass'    //serch pass page
];

/**
 * Handle user login.
 *
 * @param {HttpRequest} req
 * @param {HttpResponse} res
 * @param {Function} next
 */
// exports.login = function (req, res, next) {
//   var loginname = validator.trim(req.body.name).toLowerCase();
//   var pass      = validator.trim(req.body.pass);
//   var ep        = new eventproxy();

//   ep.fail(next);

//   if (!loginname || !pass) {
//     res.status(422);
//     return res.render('sign/signin', { error: '信息不完整。' });
//   }
//   // getUser
// };

// sign out
exports.signout = function (req, res, next) {
  req.session.destroy();
  res.clearCookie(config.auth_cookie_name, { path: '/' });
  res.redirect('/');
};

exports.activeAccount = function (req, res, next) {
  var key  = validator.trim(req.query.key);
  var name = validator.trim(req.query.name);

  // getUser
};

exports.showSearchPass = function (req, res) {
  res.render('sign/search_pass');
};

exports.updateSearchPass = function (req, res, next) {
  var email = validator.trim(req.body.email).toLowerCase();
  if (!validator.isEmail(email)) {
    return res.render('sign/search_pass', {error: '邮箱不合法', email: email});
  }

  // 动态生成retrive_key和timestamp到users collection,之后重置密码进行验证
  var retrieveKey  = uuid.v4();
  var retrieveTime = new Date().getTime();

  // getUser
};

/**
 * reset password
 * 'get' to show the page, 'post' to reset password
 * after reset password, retrieve_key&time will be destroy
 * @param  {http.req}   req
 * @param  {http.res}   res
 * @param  {Function} next
 */
exports.resetPass = function (req, res, next) {
  var key  = validator.trim(req.query.key || '');
  var name = validator.trim(req.query.name || '');

  // getUser
};

// exports.updatePass = function (req, res, next) {
//   var psw   = validator.trim(req.body.psw) || '';
//   var repsw = validator.trim(req.body.repsw) || '';
//   var key   = validator.trim(req.body.key) || '';
//   var name  = validator.trim(req.body.name) || '';

//   var ep = new eventproxy();
//   ep.fail(next);

//   if (psw !== repsw) {
//     return res.render('sign/reset', {name: name, key: key, error: '两次密码输入不一致。'});
//   }
//   // getUser
// };

