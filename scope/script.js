'use strict'
// global 
// local 
// Script
// lexial 
// block scope
// debugger
const username = 'Pawan'
const userAge = 21

function add(){
    const x = 5
    const y = 8
    console.log( x + y)

}
function subtract(){
    const x = 5
    const y = 8
    console.log( x - y)

}
function child(){
    const childName = "Golu"
    console.log(childName)
    {
        const n = 15
        console.log(n)
    }
}
add()
subtract()
child()

console.log('Programm Ended')

