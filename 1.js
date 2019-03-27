// var book=[{
//   en:"math",
//   cn:"数学",
//   book: [{
//     en: 'num',
//     cn: '代数'
//   }]
// },{
//   en: 'english',
//   cn: '英语',
//   book: [{
//     en: 'small',
//     cn: '小学英语'
//   }]
// }]

// function find(data,name){
//   let result = ''
//   data.forEach(item => {
//     if(item['en'] === name){
//       result = item['cn'] 
//     }else{
//       if(item['book']){
//         result = find(item['book'],name)
//       }
//     }
//   })
//   return result
// }

// let arr = [1,352,123,312,4,763,181]
// let a = arr.every(item => item > 0)
// let b = arr.some(item => item < 0)
// console.log(b)

// var name="jack"
// function test(){
//   var name="tom";
//   (function (){
//     console.log(this.name)
//   })()
// }
// test()

obj = {
  // this-->window
  fn: function()  {
      // this-->obj
      console.log(111, this);
      function b() {
          // this-->window
          console.log(222, this)
      }
      b()
  }
}
obj.fn()



