/**
 * 按照调用实例，实现下面的Person方法：
Person("Li");
// 输出： Hi! This is Li!

Person("Dan").sleep(10).eat("dinner");
// 输出：
// Hi! This is Dan!
// 等待10秒..
// Wake up after 10
// Eat dinner~

Person("Jerry").eat("dinner").eat("supper");
// 输出：
// Hi This is Jerry!
// Eat dinner~
// Eat supper~

Person("Smith").sleepFirst(5).eat("supper");
// 输出：
// 等待5秒
// Wake up after 5
// Hi This is Smith!
// Eat supper

 */

 function Person (name) {
   let newobj = new Object()
   console.log('Hi! This is ' + name)
   newobj.name = name
   newobj.sleep = function (time) {
     console.log('等待' + time + '秒..')
     for (let cur = 1; cur <= 10; cur++) {
      setTimeout(() => {
        if (time - cur === 0) {
          this.eat('dinner')
        } else {
          console.log('Wake up after' + (time - cur) + '秒')
        }
      }, 1000 * cur);
     }
     return newobj
   }
   newobj.eat = (param) => {
    console.log(`Eat ${param}~`)
   }
   return newobj
 }


 4.
// 按照调用实例，实现下面的Person方法：
Person("Li");
// 输出： Hi! This is Li!

Person("Dan").sleep(10).eat("dinner");
// 输出：
// Hi! This is Dan!
// 等待10秒..
// Wake up after 10
// Eat dinner~

Person("Jerry").eat("dinner").eat("supper");
// 输出：
// Hi This is Jerry!
// Eat dinner~
// Eat supper~

Person("Smith").sleepFirst(5).eat("supper");
// 输出：
// 等待5秒
// Wake up after 5
// Hi This is Smith!
// Eat supper
function Person (name) {
  return new _Person(name);
}
function _Person(name) {
  setTimeout(function () {
    self.next();
  }, 0)
  let self = this;
  self.tasks = [];
  function conName() {
    console.log(name);
  }
  tasks.push(conName);
  return self;
}
_Person.prototype.next = function() {
  let current = this.tasks.shift();
  current && current();
}
_Person.prototype.sleep = function(num) {
  var self = this;
  var fn = function () {
    setTimeout(() => {
      console.log('Wake up after ' + num);
      self.next();
    },num*1000);
  }
  self.tasks.push(fn);
  return self;
}
_Person.prototype.eat = function(str) {
  var self = this;
  var fn = function() {
    console.log('Eat ' + str + '~');
    self.next();
  }
  thselfis.tasks.push(fn);
  return self;
}
_Person.prototype.sleepFirst = function(str) {
  var self = this;
  var fn = function () {
    setTimeout(() => {
      console.log('Wake up after ' + num);
      self.next();
    },num*1000);
  }
  self.tasks.unshift(fn);
  return self;
}
