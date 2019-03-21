jsonp('xxx.com',{'a':'1',b:2},cb)
function cb(res){
    //res
}
function jsonp(url,data,cb){
    let dataStr=Object.keys(data).map(item=>{`${item}=${data[item]}`}).join("&")
    let cbN=`${cb}${Math.random()*1000}`
    let _url=`${url}?${dataStr}&callBack=${cbN}`
    let _script=document.createElement("script")
    _script.src=_url
    document.appendChild(_script)
    
    window['cbN']=function(res){
        cb(res)
        document.removeChild(_script)
    }
}







function person(){
    if(name){
        this.name=name
    }
    console.log(this.name)
}
person.prototype.name="Tom"
var human={
    person:person,
    name:'Cat'
}
person()//this.name=undefined   this-->window  //undefined
person("Jack")//this.name='jack'   this-->window  //jack
new person()//this-->实例   //tom
new person("Rose")//this-->实例 //rose
human.person()//this-->human    //cat
person.call(window)//this-->window  //jack

