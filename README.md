# expressTest

### 更换模板引擎只需要这5句
javascript```
var mustacheExpress = require('mustache-express');
app.engine("mustache", mustacheExpress());
app.set('views', './templates/zh-hans/');
app.set('view engine', 'mustache');
res.render('index', data);
```
