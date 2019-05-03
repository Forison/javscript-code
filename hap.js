let b='_ABBA'
let counter = {};
//Make frequency object of the pieces
for (let piece of b) {
    counter[piece] = !counter[piece] ? 1 : counter[piece] += 1;
}
//If no empty space and board not solved
if (counter._ === undefined) {
    for (let i = 1; i < b.length - 1; i++) { 
        if (!(b[i] === b[i - 1] || b[i] === b[i + 1])) console.log("NO");
    }
}
//If there is space, make sure no color occur only once
delete counter._;
if (Object.values(counter).includes(1)) console.log("NO");
console.log("YES");