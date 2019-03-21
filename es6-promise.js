//手写一个promise
// 三个状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
// 状态改变 不可逆：resolve（成功） = pending --》 fulfilled   ；   reject（失败）=  pending --》 rejected    


// Promise对象是一个构造函数
// 接受一个函数作为参数，该函数的两个参数分别是resolve和reject
// let myPromise = new Promise((resolve, reject)=> {
//     // if success
//         resolve(value);
//     // if fail
//         reject(error);
// })

// class MyPromise{
//     constructor(executor){
//         this.status='pending'
//         this.val=''
//         this.fulfilledCallback = []
//         this.rejectedCallback = []
//         executor(this.resolve.bind(this),reject)
//     }
//     resolve(val){
//         if(this.status!='pending') return
//         this.status='fullfilled'
//         this.value=val
//         setTimeout(()=>{
//             this.fulfilledCallback.forEach(item => {
//                 item(this.value)
//             })
//         },0)
//     }
//     reject(val){
//         if(this.status!='pending') return
//         this.status='rejected'
//         this.value=val
//         setTimeout(()=>{
//             this.rejectedCallback.forEach(item => {
//                 item(this.value)
//             })
//         },0)
//     }
//     then(fulfilled,rejected){
//         fulfilled && typeof fulfilled === 'function' && this.fulfilledCallback.push(fulfilled)
//         rejected && typeof rejected === 'function' && this.rejectedCallback.push(rejected)
//     }
// }
// const a = new MyPromise((resolve, reject)=>{
//     // if success
//     resolve()
//     //if fail
//     reject()
// })
// a.then((res) => {
//     console.log(res)
// },(err) => {
//     console.log(err)
// })




class MyPromise{
    constructor(executor){
        this.status='pending'
        this.value=''
        this.fulfilledCallBack=[]
        this.rejectedCallBack=[]
        executor(this.resolve.bind(this),this.reject.bind(this))
    }
    resolve(val){
        if(this.status!=='pending') return
        this.status='fulfilled'
        this.value=val
        setTimeout(()=>{
            this.fulfilledCallBack.forEach(item=>{
                item(this.value)
            })
        })
    }
    reject(val){
        if(this.status!=='pending') return
        this.status='rejected'
        this.value=val
        setTimeout(()=>{
            this.rejectedCallBack.forEach(item=>{
                item(this.value)
            })
        })
    }
    then(fulfilled,rejected){
        this.fulfilledCallBack.push(fulfilled)
        this.rejectedCallBack.push(rejected)
    }
}
var a = new MyPromise((resolve,reject) => {
    //if success
    resolve()
    //if fail
    reject()
})
a.then((res) => {
    console.log('success')
},(err) => {
    console.log("fail")
})