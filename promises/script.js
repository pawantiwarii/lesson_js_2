const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')



// promise is a object
const p = new Promise((resolve, reject) => {
    // resolve({names: 'pawan tiwari'})
    // reject('promise is rejected')
    // reject({naem: 'pawan'})
    // setTimeout(()=>{
    //     reject({statement: 'Rejected'})


    // },4000)
    resolveBtn.addEventListener('click', () =>{
        // resolve({output: 'Error Resolved'})
        resolve('Promise Resolveddddd')
    })
    rejectBtn.addEventListener('click', ()=>{
        reject('Promise is rejectedeee')
    })
   


})     // if i do not use new i get an error constructor err

p.then(() =>{

    console.log('Hello');
    
}).catch(()=>{
    console.log('promise is rejected');
    
})


// p.then((data) =>{
//     console.log(data);  //resolve('Promise Resolveddddd')
    
// }).catch((data )=>{
    
//     console.log(data);  //reject('Promise is rejectedeee')
    
// }).finally(() =>{
//     console.log('data done');   
// })

const p2 = p.then((data) =>{
    console.log(data);
    return 15
    
}).then((data)=>{
    console.log(data);
    return 'pawan tiwari'
}).then(() => {
    console.log(data);
    
}).catch((data) =>{
    console.log(data);
    return 'err'
}).then((data) =>{
    console.log(data);
    
}) 
