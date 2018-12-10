function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        // var swap=arr[j];
        // arr[j]=arr[j+1];
        // arr[j+1]=swap;
        arr[j]=arr[j]+arr[j+1];
        arr[j+1]=arr[j]-arr[j+1];
        arr[j]=arr[j]-arr[j+1];
      }
    }
  }
  return arr
}
let arr=[5,4,3,1,2]
console.log(bubbleSort(arr))
