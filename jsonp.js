
function jsonp(callbackName,url,data,){
    var head=document.getElementsByTagName('head')[0];
    //创建script标签
    var script=document.createElement('script');
    head.appendChild(script);
    // 设置script src，发送请求
    script.src=url+'?'+data;

    // 创建jsonp回调函数,通过ajax发起请求
    window[callbackName]=function(res){
        head.removeChild(script)

    }
}

