// 改变执行流程
function * test(){
    yield 'expression1'
    yield 'expression2'
    return 'ending'
}
var t=test()

console.log(11,t.next())
console.log(11,t.next())
console.log(11,t.next())
console.log(11,t.next())