function buyPack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 回调函数的成功和失败的判断逻辑
      let result = Math.random()
      console.log(result);
      if (result > 0.5) {
        resolve('买')
      } else {
        reject('不买')
      }

    }, Math.random() * 1000)

  })

}
// 回调函数的实际逻辑
buyPack().then(function (data) {//成功的回调方法
  console.log(data)
}, function (data) {//
  console.log(data)
})
