// setInterval(0)




// storing the ids of this timeout
const timer1 = setTimeout('console.log("pawan"); console.log("tiwari")', 2000)
const timer2 = setTimeout('console.log("pawan")', 0) // asyncchronous
const timer3 = setTimeout('console.log("pawan")', 400)
const timer4 = setTimeout(a, 500, 555, 'askldjs', 55, 'sads')

// clearTimeout(timer3)


function a(){
    console.log('Hello World!')
    console.log(arguments)
}

console.log("fdafjfkdjfhdkfdk")// why this print first in console 
// due to synchronous   

setTimeout(function(){
    console.log('hi-1')
})

console.log('hi-2')



