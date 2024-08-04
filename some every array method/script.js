
'use strict'


const evenNumber = [2, 4, 6, 7, 8]


// const result = evenNumber.some((num ,i) =>{
//     if(num % 2 === 1){
//         console.log(i, num);
//     }
    
//     // return num > 4 //condition checking  return true 
//     // return num > 14 // condition return false 
//     return num % 2 === 1
// }) 



// return true if one statemetn =is true its return true if value found in 
//first it stop the loop if found in center it stop in center




// in case of every if any condition does not match return false but in some loop when condition is true it return true if not match then return false
const result = evenNumber.every((num) =>{
    return num % 2 === 0;

})

