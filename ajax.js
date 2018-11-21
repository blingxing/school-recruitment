// 创建AJAX
// 1、创建XMSLHttpRequest对象
// 2、兼容性处理
// 3、事件触发条件
// 4、事件触发顺序

//创建XMSLHttpRequest对象，并且兼容IE
function Ajax(type,url,data,success,failed){
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp"),
        type = type.toUpperCase(),
        dataArr = [];
    for(var key in data){
        dataArr.push(key + '=' + data[key]);
    }
    if(type === "GET"){
        url = url + '?' + dataArr.join('&')
        //连接服务器open方法(method,url,是否异步)
        xhr.open('GET',url.replace(/\?$/g , ''),true)//当参数为空
        xhr.send() //发送请求
    }
    if(type === 'POST'){
        xhr.open('POST',url,true)
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")//表单提交数据编码类型，使用setRequestHeader()添加http头
        xhr.send(dataArr.join('&'))
    }
    //处理返回数据
    //当readyState改变，执行onreadystatechange
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){//请求已完成
            if(xhr.status==200||xhr.status==304){
                var res = JSON.parse(xhr.responseText);//获取字符串形式的响应数据并解析
                success.call(xhr,res)//获取字符串形式的响应数据
            }else{
                failed.call(xhr,xhr.status)
            }
        }
    }

}