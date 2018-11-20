let a = '';
// 回调函数 将后续的处理逻辑传入当前要做的事，事情做好后调用此函数
function buy(callback) {
  setTimeout(() => {
    a = '大蘑菇';
    callback(a);
  }, 2000);
}
buy(function cookie(val) {
  console.log(val);
});
// cookie();
//
