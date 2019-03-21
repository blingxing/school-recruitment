// 一、改变原数组
// 1、splice(从何处开始增加/删除必须，删除多少元素必须，添加到数组的新元素)  插入或者删除
//如果删除了元素，则返回的是含有被删除的元素的数组
// var arr1 = [1,2,3,4,5,7]
// console.log(arr1.splice(0))//[1,2,3,4,5,7]
// var arr2 = [1,2,3,4,5,7]
// console.log(arr2.splice(1,3),arr2)//[2,3,4],[1,5,7]
// var arr3 = [1,2,3,4,5,7]
// console.log(arr3.splice(4,1,6,8),arr3)//[5],[1,2,3,4,6,8,7]

// //2、push()  向数组末尾添加一个或多个元素，并返回新的长度
// var arr4 = [2,4,6]
// console.log(arr4.push(8),arr4) //4 [2,4,6,8]

// //3、unshift() 向数组开头添加一个或多个元素，并返回新的长度
// var arr5 = [3,5,7]
// console.log(arr5.unshift(1),arr5)//4 [ 1, 3, 5, 7 ]

// //4、pop()删除数组最后一个元素，并返回删除的元素
// var arr6 = [1,6,5]
// console.log(arr6.pop(),arr6)//5 [1,6]

// //5、shift() 删除数组第一个元素，并返回删除的元素
// var arr7 = [1,2,3,5]
// console.log(arr7.shift(),arr7)//1 [2,3,5]

// //6、sort()  排序,默认排序顺序为按字母升序,返回排序后数组
// var arr8 = [2,14,3,5]
// console.log(arr8.sort(),arr8)//[ 14, 2, 3, 5 ] [ 14, 2, 3, 5 ]
// console.log(arr8.sort((a,b)=>(a-b))) //[2,3,5,14]

// //7、reverse() 反转元素顺序
// var arr9 = [4,3,2,1]
// console.log(arr9.reverse(),arr9)//[1,2,3,4] [1,2,3,4]

//二、不改变原数组
// 1、concat() 连接数组，并返回拼接后数组
// var item1 = [1]
// var item2=[6,7,9]
// console.log(item1.concat([2,3],[5]),item1.concat(item2),item1)//[ 1, 2, 3, 5 ]  [1,6,7,9]  [ 1 ]

// //2、join() 把数组所有元素放入一个字符串,数组转字符串
// console.log(item2.join(),item2.join(""),item2.join(" "),item2.join("~"),item2)//"6,7,9"  "679"  "6 7 9"  "6~7~9"  [6,7,9]

// //3、indexOf() 返回元素在数组中第一次出现位置
var item3=[1,3,5,3,5]
// console.log(item3.indexOf(7),item3.indexOf(3),item3) //-1 1 [1,3,5,3,5]

// //lastIndexOf() 返回元素最后一次出现的位置，从尾到头检索
console.log(item3.lastIndexOf(7),item3.lastIndexOf(3),item3)// -1 3 [1,3,5,3,5]

// // 4、slice(start,end) 提取字符串某个部分, -1指最后一个元素，-2指倒数第二个元素
// var item4=[3,4,5,6,7,9]
// console.log(item4.slice(2,4),item4.slice(3),item4.slice(-2,0),item4.slice(-2,-1),item4) //[5,6] [6,7,9] [] [7] [ 3, 4, 5, 6, 7, 9 ]

// //5、toString()
// var item5=[3,4,5]
// console.log(item5.toString(),item5)//"3,4,5" [3,4,5]

// //6、valueOf() 返回 Array 对象的原始值
// var item6=["3",4,5]
// console.log(item6.valueOf(),item6)//[ '3', 4, 5 ] [ '3', 4, 5 ]

//三、遍历方法
//1、map(),返回一个新数组
// var age=[18,50,22,80]
// console.log(age.map((item,index)=>(item+':'+index)),age)//[ '18:0', '50:1', '22:2', '80:3' ] [ 18, 50, 22, 80 ]

// //2、every() 检测所有元素是否都符合条件，返回布尔值
// var result = age.every((item,index)=>{
//     return item>10
// })
// console.log(result,age)//true [ 18, 50, 22, 80 ]

// //3、some() 检测是否有元素满足条件 ， 返回布尔值
// console.log(age.some((item,index)=>(item>80)),age.some((item,index)=>(item>=80)),age) //false true [ 18, 50, 22, 80 ]

// //4、filter() 返回一个新数组，为原数组中满足条件的元素
// console.log(age.filter((item,index)=>(item>=50)),age)//[ 50, 80 ] [ 18, 50, 22, 80 ]


