    //var s='feedthedog '
    var s='ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots'    
    //var s='chillout'
    //var s = 'haveaniceday'
    var stringform = s.split('')
    let upL=Math.ceil(Math.sqrt(s.length))
 
    let downL=Math.floor(Math.sqrt(s.length))
    upL*downL<s.length?downL++:downL
    var rowform = []
   //console.log(stringform)
    for (let index = 0; index < downL; index++) {
        
        rowform.push(stringform.splice(0, upL))
        stringform.length>=upL?true:rowform.push(stringform.splice(0, stringform.length))
        
    }
    
    // console.log(rowform)
    var columnform = []

    for (let j = 0; j < upL; j++) {
        for (let index = 0; index < upL; index++) {
         
            columnform.push(rowform[index].splice(0, 1))
        }
    }
    
    var encrypted = columnform.join('')
    
    var encryptedString = encrypted.split('')
    
    var encryptedrows = []
    for (let index = 0; index < upL; index++) {
        downL<3?encryptedrows.push(encryptedString.splice(0, 3).join('')):encryptedrows.push(encryptedString.splice(0, downL).join(''))

    }
    console.log( encryptedrows.join().replace(/,/g,'\u0020') )