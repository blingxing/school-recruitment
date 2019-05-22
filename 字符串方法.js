// 1、replace() 替换
var str1="All My interviews went smoothly"
console.log(str1.replace("went","must go well"),str1)// ”All my interviews must go well smoothly“ ”All my interviews went smoothly“

//2、concat() 连接字符串

//3、indexOf() 返回某个指定的字符串值在字符串中首次出现的位置

//4、 lastIndexOf() 返回一个指定的字符串值最后出现的位置

//5、split(分隔符，返回数组最大长度) 字符串转数组
// console.log(str1.split(),str1.split(""),str1.split(" "),str1.split("l"),str1)
//["All my interviews went smoothly"] ['A','l','l',' ','m'...]  [ 'All', 'my', 'interviews', 'went', 'smoothly' ]  ['A','',' my interviews went smooth','y'] 

//6、slice(start,end) 提取字符串的某个部分
console.log(str1.slice(3,-2),str1)//"my interviews went smooth"  "All my interviews went smoothly"
 
//7、substr(start,length) 抽取从 开始 下标开始的指定数目的字符
console.log(str1.substr(3,2),str1) // ' m' "All my interviews went smoothly"

//8、substring(start,end)  抽取的字符包括开始处，不包括end处
console.log(str1.substring(3,8),str1)//' my i' "All my interviews went smoothly"

// 9、toLowerCase() 转为小写

//10、toUpperCase()  转为大写

//11、charAt()

// 12、charCodeAt() 

//13、fromCharCode() 将 Unicode 编码转为字符串

//14、match() 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配,返回一个数组，数组的内容依赖于 regexp 是否具有全局标志 g
console.log(str1.match('ll'),str1.match(/ll/g),str1)
//[ 'll',index: 1,input: 'All my interviews went smoothly',groups: undefined ]  ['ll'] 'All my interviews went smoothly'

//15、search(查找的字符串或者正则表达式)  返回匹配到的string起始位置
console.log(str1.search('m'),str1.search(/m/i),str1)// 24 4 'All My interviews went smoothly'

