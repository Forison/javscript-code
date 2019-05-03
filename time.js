let h=3
let m=00
//create an array to store the hour of the day
let hour={
1:'one',
2:'two',
3:'three',
4:'four',
5:'five',
6:'six',
7:'seven',
8:'eight',
9:'nine',
10:'ten',
11:'eleven',
12:'twelve'
}
//create an array to store the min of the day
let min={
1:'one',
2:'two',
3:'three',
4:'four',
5:'five',
6:'six',
7:'seven',
8:'eight',
9:'nine',
10:'ten',
11:'eleven',
12:'twelve',
13:'thirteen',
14:'forteen',
15:'fifteen',
16:'sixteen',
17:'seventeen',
18:'eighteen',
19:'nineteen',
20:'twenty',
21:'twenty one',
22:'twenty two',
23:'twenty three',
24:'twenty four',
25:'twenty five',
26:'twenty six',
27:'twenty seven',
28:'twenty eight',
29:'twenty nine',
    }
 
   // find out if min is zero and take the appriate step
    
   m===0?console.log(`${hour[h]} value o' clock`):
   m>1 && m!==15 && m<30?console.log(`${min[m]} minutes past ${hour[h]}`):
   m===1?console.log(`${min[m]} minute past ${hour[h]}`):
   m===15?console.log(`quarter past ${hour[h]}`):
   m===30?console.log(`half past ${hour[h]}`):
   m>30 && m!==45 ?console.log(`${min[60-m]} minutes to ${hour[h+1]}`):
   m===45?console.log(`quarter to ${hour[h+1]}`):
   false
   