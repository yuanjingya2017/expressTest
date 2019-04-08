const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world!')
});
app.route('/events')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  console.log('this is use route');
  res.send('Hello now use route 111!')
})
.get(function(req, res, next) {
  console.log('use get')
})
.post(function(req, res, next) {
  console.log('use post')
});
app.listen(3002, () => console.log('Example app listening on port 3000!'));
