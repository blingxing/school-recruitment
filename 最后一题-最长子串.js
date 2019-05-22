// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
function getNoRepeatLength(str){
    let sonStr='',result=""
    for(let i=0;i<str.length;i++){
        var index=sonStr.indexOf(str[i])
        if(index===-1){
            sonStr+=str[i]
            result=result.length<sonStr.length?sonStr:result 
        }else{
            sonStr=sonStr.substr(index+1)+str[i]
        }
    }
    return result
    // var res = ""; // 用于存放当前最长无重复子串的长度
    // var str = ""; // 用于存放无重复子串
    // var len = s.length;
    // for(var i = 0; i < len; i++) {
    //   var char = s.charAt(i);
    //   var index = str.indexOf(char);
    //   if(index === -1) {
    //     str += char;
    //     res = res.length < str.length ? str : res;
    //   } else {
    //     str = str.substr(index + 1) + char;
    //   }
    // }
    // return res;
}
var str="pwwkew"
r=getNoRepeatLength(str)
console.log(r)