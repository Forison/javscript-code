//var retDay=[9 ,6 ,2015]
//let retDay=[2 ,7 ,1014]
let retDay=[2, 7 ,1014]
// get return date
let d1=retDay[0]
let m1=retDay[1]
let y1=retDay[2]

let fine=0

let dueDat=[1 ,1 ,1015]
//var dueDat=[6, 6, 2015]
//let dueDat=[1 ,1, 1014]
// get due dates 
let d2=dueDat[0]
let m2=dueDat[1]
let y2=dueDat[2]

// if due date is less than or equal to returned date no fine is attratec else 
console.log( d1<=d2 && m1<=m2 && y1<=y2? fine=0 : 
// if return date is greater than due date 

d1>d2 && m1===m2 && y1===y2? fine=15*( d1-d2):

// check if is greater by day

m1>m2 && y1===y2? fine=500*(m1-m2):
// check if greater by month

//check if greater by year
y1>y2? fine=10000:false

)