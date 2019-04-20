/**
 * config
 */

var path = require('path');

var config = {
  debug: true,
  // cdn host，如 http://cnodejs.qiniudn.com
  allow_sign_up: true,
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/expressTest',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'node_club_secret', // 务必修改
  auth_cookie_name: 'node_club',

  // 程序运行的端口
  port: 3000,
  // todo 什么作用？？？
  // RSS配置
  rss: {
    title: 'CNode：Node.js专业中文社区',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'CNode：Node.js专业中文社区',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },
  // todo 如何配置log？？？
  log_dir: path.join(__dirname, 'logs'),

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'club@126.com',
      pass: 'club'
    },
    ignoreTLS: true,
  }
};

module.exports = config;
