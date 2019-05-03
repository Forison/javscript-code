let count,p,d,m,s,p2
p=16
d=2
m=1
s=9981
count=0
//100 1 1 99
//16 2 1 9981
// 20 3 6 85
// set a loop to iterate from the total amount the person has to 0
for (let i = s; i >= 0; i--) {
    console.log(s-=p)  
    //    substract repeatedly d from the cost price 
       p-=d
    //set pto m if p reaches the point where it is less than or equal to m     
     if (p<=m) {
         p=m
       }
    // count iteration as it is equal to max the person can buy   
    count++ 
    //if mis greater than s the person cannot afford to buy anymore so exit loop
     if (s<p){
       break
       }
}
//return counts
console.log(count)