//Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
      console.log(`getting ${key}!`);
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
      console.log(`setting ${value}!`);
      return Reflect.set(target, key, value, receiver);
    }
  });
//   obj.count=3
//   ++obj.count
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);//handler是一个空对象，没有任何拦截效果，访问proxy就等同于访问target
proxy.a = 'b';
console.log(target.a) // "b"