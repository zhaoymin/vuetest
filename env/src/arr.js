let arr = [1,3,2,6]
arr.b = 100
// 1、函数式编程
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
// 2、声明式编程 feature:不可以return,不关注内部实现
// arr.forEach(function (item) {
//   console.log(item)
// })
//    3、for in 可以遍历到arr的所有的私有属性 索引是字符串
//     for(let index in arr){
//       console.log(arr[index]);
//       console.log( index)
//     }
//     4、for of 支持return,只能遍历数组
        for (let val of arr) {
          console.log(val);
        }

