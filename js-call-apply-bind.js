//注意如果call和apply的第一个参数写的是null，那么this指向的是window对象
        //1、call
        var a = {
            user: "追梦子",
            fn: function (e, ee) {
                console.log(this.user); //追梦子
                console.log(e + ee); //3
            }
        }
        var b = a.fn;
        b.call(a, 1, 2);



        // 2、apply
        var a = {
            user: "追梦子",
            fn: function (e, ee) {
                console.log(this.user); //追梦子
                console.log(e + ee); //11
            }
        }
        var b = a.fn;
        b.apply(a, [10, 1]);





        // 3、bind
        // bind方法返回的是一个修改过后的函数
        // bind方法可以让对应的函数想什么时候调就什么时候调用
        // var a = {
        //     user: "追梦子",
        //     fn: function (e, ee, eee) {
        //         console.log(this.user);
        //         console.log(e + ee + eee)
        //     }
        // }
        // var b = a.fn;
        // // 并且参数可以执行的时候再次添加
        // var c =b.bind(a, 2);
        // console.log(c) //f(){ console.log(this.user);}
        // c(4, 6)


        // 但低版本浏览器没有bind
        Function.prototype.abind = function (obj) {
            var _self = this,
                args = arguments;
            return function () {
                _self.apply(obj, Array.prototype.slice.call(args, 1));
            }
        }
        abind(co,arg)