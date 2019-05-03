//let ar=[1,2,2,3]
let ar=[ 2 ,1,7 ,3]
let count={}
//count the highest each element in the array 
ar.forEach( (el)=>{
    count[el]=1 + (count[el] || 0)
})
//get the highest occurence values   
let them=Math.max(...Object.values(count))
them===1?-1:console.log(ar.length-them)
