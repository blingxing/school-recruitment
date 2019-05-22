//1、var 变量提升到作用域最前
function test() {
    //var a = undefined
    console.log(a)
    var a = 2
}
//相当于
function test() {
    var a = undefined;
    console.log(a)
    a = 2
}


var a = 1

function test1() {
    a = 2 //a挂载到window
}

//2、找函数声明，值赋予函数体
//var a=undefined
//b:function b(){console.log(1)}
b(); //1
a(); //error:a is not a function
var a = function () {
    console.log(1)
}

function b() {
    console.log(1)
}

var a = 10

function test2() {
    //for循环内a 提升  相当于
    var a = undefined
    a = 20 //a=20在test2作用域内
    for (var a = 0; a < 5; a++) { //for循环内var a = 0
        console.log(a) //0，1，2，3，4
    }
    //a=5
    console.log(this.a) //this-->window,  10
    console.log(a) //5
}
console.log(a) //10

// this指向
//箭头函数this　指向它父级执行上下文的this
//普通函数   指向调用它的对象  不知道谁调用它的时候指向window
obj = {
    // this-->window
    fn: () => {
        // this-->obj-->window
        console.log(111, this);
        (function () {
            // this-->fn-->window
            console.log(222, this)
        })()
    }
}
obj.fn()


obj = {
    // this-->window
    fn: function () {
        // this-->obj
        console.log(111, this);
        (() => {
            // this-->fn-->obj
            console.log(222, this)
        })()
    }
}
obj.fn()


obj = {
    // this-->window
    fn: () => {
        // this-->obj
        console.log(111, this);
        (() => {
            // this-->fn-->obj
            console.log(222, this)
        })()
    }
}
obj.fn()


var name = 'sx22222'
var a = function () {
    console.log(this.name)
}
var obj = {
    //this-->window
    name: 'sx',
    fn: (a) => {
        // this-->window
        var name = 1;
        a() //普通函数不知道谁掉用它，指向window     
    }
}
obj.fn(a)


var name = 'sx22222'
var a = function () {
    console.log(this.name)
}
var obj = {
    name: 'sx',
    fn: function (a) {
        // this-->obj
        var name = 1;
        a() //普通函数不知道谁掉用它，指向window  
    }
}
obj.fn(a)






var point = {
    x: 0,
    y: 0,
    moveTo: {
        //x:1
        //y:1
        moveX: function (x) {
            //this-->moveTo
            console.log(this)
            this.x = x; //moveTo.x=1
        },
        moveY: function (y) {
            // this-->moveTo
            this.y = y; //moveTo.y=1
        }
    }
};
point.moveTo.moveX(1); //{moveX:..,moveY:...}
point.moveTo.moveY(1);
console.log(point.moveTo); //{x:1,y:1,moveX:..,moveY:...}
console.log(point.x); //0
console.log(point.y); //0
console.log(x) //error
console.log(y) //error



function fn2() {
    this.username = "sx";
    return {};
}
fn2.prototype.name = "dd"
var obj = new fn2;
console.log(obj); // {}
console.log(obj.name); //"sx"

function fn1() {
    this.username = 'sx22';
    return function () {};
}
var b = new fn1;
console.log(b); //function () {}
console.log(b.username); //"sx22"

function fn() {
    this.username = 'sx222222';
    return 1;
}
var a = new fn;
console.log(a); //{username:'sx222222'}
console.log(a.username); //"sx222222"

function fn3() {
    this.username = 'sx2222222222';
    return null;
}
var a = new fn;
console.log(a); //{username:'sx2222222222'}
console.log(a.username); //'sx2222222222'


function M() {
    this.name = 'sx'
}
var m = new M()









//var getName=undefined
// function getName() {
//     console.log(5);
// }
function Foo() {
    getName=function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
}; 
var getName = function () {
    console.log(4);
};

// function getName() {
//     console.log(5);
// }

//请写出以下输出结果：
Foo.getName();//2
getName();//4
Foo().getName();//window.getName()   1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3



