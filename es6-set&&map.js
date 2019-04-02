//Set
//新的数据结构 Set.成员的值都是唯一的，没有重复的值
const s = new Set();

//方法
s.add(5) //添加,返回 Set 结构本身
s.add([1, 2])
s //Set(3) {5,Array(2)}
s.delete(5) //删除某个值，返回一个布尔值，表示删除是否成功
s.has(0) //返回一个布尔值，表示该值是否为Set的成员
s.clear() //清除所有成员，没有返回值


//Map
const m = new Map([
    ['name', '张三'],
    ['title', 'Author']
]); //本质上是键值对的集合（Hash 结构）,但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
m.set(0, 11)//设置键名key对应的键值为value，然后返回整个 Map 结构
m//Map(3) {"name" => "张三", "title" => "Author", 0 => 11}
m.size//返回 Map 结构的成员总数
m.get(0)//读取key对应的值,如果找不到key，返回undefined
m.has("name")//某个键是否在当前 Map 对象之中
m.delete("name")//删除某个键,返回一个布尔值
m.clear() //清除所有成员，没有返回值