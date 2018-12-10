function flatArr(arr) {
  let resultArr = []
  if (arr.length < 2) {
    return arr
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // resultArr=resultArr.concat(flatArr(arr[i]))
        // resultArr.push.apply(resultArr,flatArr(arr[i]))
        // resultArr.push(...flatArr(arr[i]))
        resultArr=[...resultArr,...flatArr(arr[i])]
      } else {
        resultArr.push(arr[i])
      }
    }
    return resultArr
  }
}
let arr=[2,[3,4,[7,2,[5,6]]],4]
console.log(flatArr(arr))