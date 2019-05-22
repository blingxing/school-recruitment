// js
function Test(name,age){
    this.name=name
    this.age=age
}
Test.prototype.say=function(){
    return "我的名字叫" + this.name+"今年"+this.age+"岁了"
}
var person1=new Test('Winnie',21)
console.log(person1.say())

// class
class Person{//定义一个类   
    constructor(name,age){//constructor是一个构造方法，用来接收参数,
        this.name=name;
        this.age=age;
        console.log(22,this)//constructor方法默认返回实例对象this-->Person { name: 'Timmy', age: 23 }
    }
    say(){// 在类中声明方法的时候，千万不要给该方法加上function关键字
        return "我的名字叫" + this.name+"今年"+this.age+"岁了"
    }
}
var person2=new Person('Timmy',23)
console.log(111,person2.say())


//静态方法
// static，只能通过类来调用，


//继承 
// 父类的静态方法可以被继承，但子类实例不能调用
class Child extends Person{
    constructor(name,age,sex){
        super(name+'E',age+'E')//super作为函数调用时，代表父类的构造函数===>Father.prototype.constructor.call(this)
        this.sex=sex
    }
}
let child1=new Child('tony',3,'men')
console.log(44,child1)