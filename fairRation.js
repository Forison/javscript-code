let loaves = 0;
    
let sum = B.reduce((a, b) => a + b);
if (sum % 2 !== 0) return 'NO';
//loop through array toperform logical quiz

B.forEach(function (e, i) {
    //check current value
    
    if (e % 2 === 1) {
        B[i]++;
        // if odd add one to it 
        loaves++;
        // increment loaf count by one 

    //   check value behind current value
        if (B[i - 1] % 2 === 1) {
            // if odd increment by one and increment loaf count as well
            B[i - 1]++;
            loaves++;
     //   check value behind current value
        } else {
            // if odd increment by one and increment loaf count as well
            B[i + 1]++;
            loaves++;
        }
    }
})
// return count of loaves
return loaves;
