//var ar=[1,1,2,2,4,4,5,5,5]
var a=[4 ,6 ,5 ,3 ,3 ,1]
var ftemp=[]

var ar=a.sort()
console.log(ar)
var count=0
/*
for (let i = 0; i < array.length; i++) {
       var ay=array[i];

  for (let j = i+1; j < array.length; j++) {
       var jay=array[j];

       if (Math.abs(ay-jay) <=1   ) {
         
       }else{
         i++
       }
    
  }
  
}
*/
var count={}

ar.forEach( (el)=>{

  count[el]=1+(count[el] ||0)

})


console.log(Object.entries(count))

console.log(Object.keys(count))
var thekeys=Object.keys(count)

