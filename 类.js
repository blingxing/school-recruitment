function Storage(){
    this.say = function(){
        console.log(111111)
    }
}
// window.localStorage.setItem(a,"1") 
Storage.prototype.set= function(key,value){
    window.localStorage.setItem(key,value)
}
var storage = new Storage()
storage.say('a',1)
storage.say()











