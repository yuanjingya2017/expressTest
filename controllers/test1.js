/**
 * http://ife.baidu.com/2017/course/detail/id/15 动态数据绑定
 * @param {*} obj 
 */
function Observer (obj) {
  this.data = obj
  console.log(obj, this)
  this.walk(obj)
}
var p = Observer.prototype;
// 递归思路 要给每个对象添加getter 和 setter方法
p.walk = function (obj) {
  let val;
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      val = obj[key]
      // 这里进行判断 如果还没有遍历到最底层，继续new Observe
      if (typeof val === 'object') {
        new Observer(val);
      }
      this.convert(key, val)
    }
  }
}
// 设置getter和setter方法 方法实现
p.convert = function (key, val) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('你访问了' + val)
      return val
    },
    set: function (newval) {
      console.log('你设置了' + key)
      console.log('新的' + key + ' = ' + newval)
      if (newval === val) return
      val = newval
    }
  })
}
p.walk1 = function (obj, keyword, callback) {
  let val;
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      val = obj[key]
      // 这里进行判断 如果还没有遍历到最底层，继续new Observe
      if (typeof val === 'object') {
        new Observer(val);
      }
      if (keyword === key) {
        this.convert1(key, val, callback)
      }
    }
  }
}
p.convert1 = function (key, val, callback) {
  console.log(callback)
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('你访问了' + val)
      return val
    },
    set: function (newval) {
      console.log('你设置了' + key)
      console.log('新的' + key + ' = ' + newval)
      if (newval === val) return
      val = newval
      callback(val)
    }
  })
}
p.$watch = function (key, callback) {
  this.walk1(this.data, key, callback)
}