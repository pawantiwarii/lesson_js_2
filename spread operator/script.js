const arr =  ['Pawan', 'Rohit', 'Sonu', 'Monu']
const arr1 = ['Sonakshi', 'Gyatri', 'Arzoo', 'Pooja']

// const joinedArry = arr.concat(arr1)
// console.log(joinedArry);

const joinedArry = [...arr,...arr1]
console.log(joinedArry);



const user ={
    name: 'Pawan',
    age: 25,
}

const updatedUser ={...user, title: 'Tiwari', city:'Bhojpur', contact:9135199460}
console.log(updatedUser);

const arr2 =  [1,2,3,4,5]
const arr3 = [6,7,8,9,10]
const joinedArry1 = [...arr2, ...arr3]
const myName = 'Pawan'

function add(){
    
    let sum= 0
    for( let i= 0; i < arguments.length; i++){
        console.log(arguments[i]);
        sum = sum + arguments[i]

    }
    return sum
}
