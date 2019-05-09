var mongoose = require('mongoose');
var config   = require('../config');
// var logger = require('../common/logger')

mongoose.connect(config.db, {
  poolSize: 20,
  useCreateIndex: true,
  useNewUrlParser: true
}, function (err) {
  if (err) {
    console.log('connect to %s error: ', config.db, err.message);
    // logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});
mongoose.connection.on('connected', function () {    
  console.log('Mongoose connection open to ' + config.db);  
});  
// models
require('./user');
// require('./topic');
// require('./reply');
// require('./topic_collect');
// require('./message');

exports.User         = mongoose.model('User');
// exports.Topic        = mongoose.model('Topic');
// exports.Reply        = mongoose.model('Reply');
// exports.TopicCollect = mongoose.model('TopicCollect');
// exports.Message      = mongoose.model('Message');
