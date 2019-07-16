function chunk (arr, len) {
  if(arr instanceof Array || typeof len !== 'number') {
      // 分组的长度 大于 数组长度的情况
      if (arr.length < len) {
          return arr
      }
      let arr1 = []
      let y, x
      for(let i = 0; i < arr.length; i++) {
        y = parseInt(i/len)
        x = i % len
        if (x === 0) {
          arr1[y] = []
        }
        arr1[y][x] = arr[i]
      }
      return arr1
  } else {
    alert('this is not an array')
  }
}