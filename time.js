function timeList(startTime,endTime,step){
  let result = {}
  
  step = 1 * 60 * 60 *1000

  while(startTime < endTime){
    let cur = new Date(startTime)
    let Y = cur.getFullYear()
    let M = cur.getMonth() +1
    let D = cur.getDate()
    let h = cur.getHours()
    let key = `${Y}-${M}-${D}`
    if(result[key]){
      result[key].push(`${h}:00-${h + 1}:00`)
    }else {
      result[key] = [`${h}:00-${h + 1}:00`]
    }

    startTime += step
  }
  return result
}
let a = timeList(+new Date(),+new Date('2018-12-12 13:00:00'),1)
console.log(a)