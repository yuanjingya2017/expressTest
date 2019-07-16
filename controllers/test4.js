// 需求：写一个方法，可以利用字符串路径获取对象集合的值，当值不存在时返回错误信息


// let object = {'a': [{'b': {'c': 3}}]};


// let [err, result] = fn.get(object, 'a[0].b.c');
// console.log(err, result); // => null, 3

// let [err, result] = fn.get(object, 'a[0].d.c');
// console.log(err, result); // => Is err about 'd', null

function fn (obj, str) {
  let objtemp = obj
  let temp = str.split('.')
  console.log(temp)
  for (let i = 0; i < temp.length; i++) {
    let tempEle = temp[i]
    let temp1
    temp1 = fnsub(tempEle, objtemp)
    if (temp1[1]) {
      objtemp = fnsub(tempEle, objtemp)
    } else {
      return temp1
    }
  }
  return objtemp
}
function fnsub (tempEle, obj) {
  let objEx
  let str
  if (tempEle.indexOf('[') > 0) {
    let num = +(tempEle.substring(tempEle.indexOf('[') + 1, tempEle.indexOf(']')))
    console.log(tempEle.indexOf('['))
    str = tempEle.substring(0, tempEle.indexOf('['))
    console.log(obj, str, obj[str][num])
    if (!obj[str]) {
      return [str, null]
    }
    objEx = obj[str][num]
  } else {
    console.log(obj, tempEle)
    if (!obj[tempEle]) {
      return [tempEle, null]
    }
    objEx = obj[tempEle]
  }
  return [null ,objEx]
}