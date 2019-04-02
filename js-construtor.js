class P{
    constructor (){

    }
    say(){
        console.log("i can say")
    }
    static play(){
        console.log("i can play")
    }
    static name = 1
}
var p = new P()
p.say()
console.log(P.name)