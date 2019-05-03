let k=3
let chapt=5
let arr=[4 ,2 ,6 ,1 ,10]
let temp=[]
let page=0
let special=0

for (let ch = 0; ch <chapt; ch++) {
        //console.log(arr[ch])

        for (let quest = 1; quest <=arr[ch]; quest++) {
            // console.log(quest)
            temp.push(quest) 
            console.log(temp)
            //if question is equal is equal to k increase page by one or if question is equal arrch page+=1
            if (quest===k || quest%k===0 || quest===arr[ch]) {
                
                page++
                //console.log('page'+''+page)
                if (page) {
                    temp.includes(page)?special++:false
                    temp=[]
                }
            
            }
            //push question at the interval of 
            
        }
    
}
console.log(special);
