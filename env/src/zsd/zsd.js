//console.log('ok');
 let arr=[8,9,7,4,5];
arr.b='200';
 for(let i=0;i<arr.length;i++){
   console.log(arr[3]);
 }
arr.forEach(
  function(item,index){
    console.log(item+"===="+index);
  }
)
// for(let key in arr){
//   console.log(key);
// }
for(let val of arr){
  console.log(val);
}
