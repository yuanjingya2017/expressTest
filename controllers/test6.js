/**
 * 
Promise

(1) Promise对象代表一个异步操作
pending
fulfilled
rejected
异步的结果能够改变状态

(2)pending-> fulfilled
   pending->rejected
   表示 resolved

   const promise = new Promise(function (resolve, rejecte) {
     //异步操作成功
     if (true) {
       resolve(value);
     } else {
       reject(error);
     }
   })
*/

   promise.then(function (value) {/**success */}, function (error) {/**fail */})

   const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
    });
  
    return promise;
  };
  
  getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
  }, function(error) {
    console.error('出错了', error);
  });