// function sleep(second) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(' enough sleep~');
//         }, second);
//     })
// }
// function normalFunc() {
//     console.log('normalFunc');
// }
// async function awaitDemo() {
//     await normalFunc();
//     console.log('something, ~~');
//     let result = await sleep(2000);
//     console.log(result);// 两秒之后会被打印出来
// }
// awaitDemo();
// console.log("wait")
// normalFunc
// VM4036:13 something, ~~
// VM4036:15  enough sleep~
function test(a, b) {
    let carry=0
    for(let i=0;i<2;i++){
        console.log((a[i]||0),(b[i]||0))
        let sum=(a[i]||0)+(b[i]||0)+carry
        console.log(11,sum)
    }
};
test([1,1],[1])