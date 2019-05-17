var express = require('express');
var config = require('./config');

var sign = require('./controllers/sign');

var router = express.Router();

// sign controller
if (config.allow_sign_up) {
  router.get('/', sign.showSignup);
  router.get('/signup', sign.showSignup);  // 跳转到注册页面
  router.post('/signup', sign.signup);  // 提交注册信息
}
// else {
//   // 进行github验证
//   router.get('/signup', function (req, res, next) {
//     return res.redirect('/auth/github')
//   });
// }
// router.post('/signout', sign.signout);  // 登出
// router.get('/signin', sign.showLogin);  // 进入登录页面
// router.post('/signin', sign.login);  // 登录校验
// router.get('/active_account', sign.activeAccount);  //帐号激活

// router.get('/search_pass', sign.showSearchPass);  // 找回密码页面
// router.post('/search_pass', sign.updateSearchPass);  // 更新密码
// router.get('/reset_pass', sign.resetPass);  // 进入重置密码页面
// router.post('/reset_pass', sign.updatePass);  // 更新密码


module.exports = router;