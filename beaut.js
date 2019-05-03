//let arr=[2,2,3,4,5]
let arr=[1,2,4,5,7,8,10]
// let d=1
let d=3
let count=0

// if i< j < k  && arr[i]-arr[j]=arr[k]-arr[j]  which should in turn be equal =d

arr.map( (value)=>{arr.includes(value+d) && arr.includes(value+ (2*d))?count++:0})
console.log(count)