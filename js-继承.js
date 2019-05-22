// 1、借助构造函数
function Father1(name){
    this.name=name
}
function Child1(name){
    Father1.call(this,name)
    this.type = "child1"
}
var child1 = new Child1("child1-Name")
var father1 = new Father1("father1-Name")
child1.name //"child1-Name"
child1.type //"child1"
father1.name //"father1-Name"
//缺点
//1、无法继承父类原型链上的属性和方法




//2、借助原型链
function Father2(home){
    this.name=["a","b"]
    this.home=home
}
Father2.prototype.say=function(){
    console.log(this.name)
}
Father2.prototype.friends = ['小名', '小强'];
function Child2(home){
    this.type = "child2"
}
Child2.prototype=new Father2()
var child2=new Child2()
var father2=new Father2()

//优点：能继承父类原型链上的属性和方法
//缺点：
//1、引用类型的属性被所有实例共享，被继承的引用类型的属性改变，实例属性都会改变
var child3 = new Child2()
child3.name.pop()
child2.name//["a"]
child3.name//["a"]


child3.friends.pop()
child3.friends//["小名"]
father2.friends//["小名"]
//2、在创建 Child 的实例时，不能向Parent传参
var child4 = new Child2("happy")
child4.home//undefined

//3、组合方式
// 组合1+2
//优点：解决了上面两种方式的问题
// 缺点：父类重复执行

//4、组合方式优化1
function Father4(home){
    this.name=["a","b"]
    this.home=home
}
Father4.prototype.say=function(){
    console.log(this.name)
}
Father4.prototype.friends = ['小名', '小强'];
function Child4(){
    Father4.call(this)
    this.type = "child4"
}
Child4.prototype=Father4.prototype
var child4=new Child4()
var father4=new Father4()
//优点：解决了方式3重复执行问题

child4 instanceof Child4 //true
child4 instanceof Father4 //true
//缺点：
child4.constructor //Father4

// 5、组合方式优化2
function Father5(home){
    this.name=["a","b"]
    this.home=home
}
Father5.prototype.say=function(){
    console.log(this.name)
}
Father5.prototype.friends = ['小名', '小强'];
function Child5(){
    Father5.call(this)
    this.type = "child5"
}
Child5.prototype=Object.create(Father5.prototype)
//==>Child5.prototype.__proto__=Father5.prototype
Child5.prototype.constructor = Child5
var child5=new Child5()
var father5=new Father5()
child5 instanceof Child5 //true
child5 instanceof Father5 //true
child5.constructor //Child5
// 最完美方法