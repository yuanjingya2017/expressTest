var validator      = require('validator');
var eventproxy     = require('eventproxy');
var config         = require('../config');
var User           = require('../proxy').User;
var mail           = require('../common/mail');
var tools          = require('../common/tools');
var utility        = require('utility');
// var authMiddleWare = require('../middlewares/auth');
var uuid           = require('node-uuid');

exports.getFpData = function (req, res) {
  res.render('content/index');
};