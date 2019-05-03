 // Write your code here
 let counter = {}
 const helper = num =>{
     let countF = 0;
     let countB = 0;
     for (let item of a){
         if(num + 1 === item || num === item) countF++;
         if(num - 1 === item || num === item) countB++;
     }
     return countF > countB ? countF : countB;
 }
 for (let item of a) {
     let key;
     if(item < 0) key = `!key${Math.abs(item)}`;
     key = `key${item}`
     if(!counter[key]) counter[key] = helper(item);
 }
 return Math.max(...(Object.values(counter)));
