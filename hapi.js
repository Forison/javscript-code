//let b='_ABBCA_'
// let b='AABCBC'
// let b='AABBC_C'
// let b='ZBF_MIFUXJNQGQRFZVRQUFFFFNGFIBJ_XZVIRFGMJRJFVMNJMF'
// let b='_'
let b='__'
//let b='DD__FQ_QQF'
let c=b.split('')
//check if b contains _
if (c.includes('_') ){
//true ==>'remove from _from
let withoutunder=b.split('_').join('').split('').sort()
console.log(withoutunder.length)
//check for only one occurrance
let count={}
withoutunder.forEach( val=>count[val]=1+(count[val]||0))
let occuranceofeachElement=Object.values(count)
if(occuranceofeachElement.includes(1)){
    //in any occur once return NO
    console.log('NO')
}if(occuranceofeachElement.includes(1)===false && withoutunder.length>0){
    console.log('NO')
}if (occuranceofeachElement.includes(1)===true || withoutunder.length===0) {
    console.log('YES')
}

}else{
console.log('NO')
}

//true ==>'remove from _from
//check the remaining to see if each occurs more than one time
//if true==>
//else false 'that is one or more elements occur only one time

//else FALSE==>'THATIS THERE IS NO _ IN b' return 'NO'





