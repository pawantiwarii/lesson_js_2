const h1 = document.querySelector('h1')

// h1.addEventListener('keypress', (e)=>{
//     console.log("key code: ", e.code);
//     console.log( "key value: ", e.key);
    

// })
// jab keyboard ka key daba ke chhodenge tab khuchh type hoga 
// h1.addEventListener('keyup', (e)=>{
//     console.log("key code: ", e.code);
//     console.log( "key value: ", e.key);
    

// })

// jab keyboard ka key dabaynge  tab khuchh type hoga 
h1.addEventListener('keydown', (e)=>{
    console.log("key code: ", e.code);
    console.log( "key value: ", e.key);
    

})
KeyboardEvent