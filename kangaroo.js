var startingXone=0
var xoneRate=2


var startingXtwo=5
var xtwoRate=3

var xmove;
var ymove 


if (startingXone>startingXtwo && xoneRate>xtwoRate) {
    return "NO"
}else if (startingXone<startingXtwo && xoneRate<xtwoRate) {
    return "NO"
}else{

    
while(true){
    xmove= startingXone+=xoneRate
    
    ymove= startingXtwo+=xtwoRate
        
    
        if (xmove===ymove) {
            return "YES"
            //console.log(xmove)
          break  
        }//END IF
        
    }
     
}

//0 3 4 2
//0 2 5 3