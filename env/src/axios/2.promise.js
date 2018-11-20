// resolve 代表的是转向成功态
// reject 代表的是转向失败态 resolve 和reject均是函数
// promise 的实例就一个then方法
let promise = new Promise((resolve,reject)=>{
  setTimeout(function () {
    let a = '大蘑菇';
    resolve(a);
    // reject(a)
  })
});
promise.then((data22)=>{console.log(data22)},(err)=>{ console.log(err+"1111")});

