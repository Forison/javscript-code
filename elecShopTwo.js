var keyboard=[40,50,60]
var usb=[5,8,12]
var budget=60
possibleCostarr=[]

var yes=0

for (let i = 0; i < keyboard.length; i++) {
    

    for (let j = 0; j < usb.length; j++) {
        var possibleCost=keyboard[i]+usb[j];
      
        possibleCostarr.push(possibleCost)
      
        //if budget is less than possible cost

        if (budget<possibleCost) {
            
            yes++
        }
        
    }
    
}
console.log(possibleCostarr)
if ( yes===possibleCostarr.length) {
    
   console.log("YES")
}else{

  var revised=possibleCostarr.filter(  (value)=>{
   return budget>=value
  })
  console.log(revised)
  //console.log( Math.max( ...revised)  )

}