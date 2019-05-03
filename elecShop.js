var keyboard=[40,50,60]
var usb=[5,8]
var budget=60
possibleCostarr=[]

for (let i = 0; i < keyboard.length; i++) {
    

    for (let j = 0; j < usb.length; j++) {
        var possibleCost=keyboard[i]+usb[j];
        console.log(possibleCost)
        possibleCost<=budget  ?
        possibleCostarr.push(possibleCost):false
    }
    
}

console.log(Math.max(...possibleCostarr))