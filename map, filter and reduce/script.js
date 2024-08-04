

const months = ['january','february','March','april','May', 'My','Mohan','Mahabharat']


// console.log( months.map((month, index)=>{
//     console.log(index +1, month)
//     return month.toUpperCase()
    
// }) );
// it create arry and return arry it store aryy

// months.forEach((month) =>{
//     console.log(month);
    
    
// })

// console.log( months.forEach((month, index)=>{
//     console.log(index +1, month)
//     return month.toUpperCase()
    
// }) );

// const capMonth = months.forEach((month, index, array)=>{
//     console.log(index +1, month, array)
//     return month.toUpperCase()
// })    // stored in capMonth passing three args.. third args is for loop the array index +1 means start numbering from 1.


// filter property

const filterMonth = months.filter((month, index, )=>{
    console.log(index +1, month)
    // return month.toUpperCase()
    // return true
    return month.toLowerCase().includes('m')
    // return month.slice(8) // empty array bcz all are sliced

})

const fruit = ['Apple', 'Banana', 'Mango', 'Chicku','Pomigranate']
const filterFruit = fruit.filter((fruit , index) =>{
    console.log(fruit);
    

    // return fruit.toLowerCase().includes('m')
    return index <= 2

})

const students = [
    {
        name:'Pawan',
        age:21,
    },
    {
        name:'Rohit',
        age: 20
    },
    {
        name:'Mohit',
        age: 20 
    },
    {
        name: 'Arti Kumari',
        age: 18
    },
    {
        name:'Aman'
        , 
        age: 25
    }

]
// chainnig is possible in array method using filter map and reduce
// for eg.
const filterStudents = students.filter((student, index, array)=>{
    
    return student.age >18
    
}).map((student)=>{

    return student.name

}).filter((student) =>  {

    return student.toLowerCase().includes('a')

})       

// reduce
const number = [1,2,3];

const reduceNumber = number.reduce((accumulator, current, index, array) =>{
   console.log(accumulator, current);
   
    // console.log( current);
    return accumulator + current
},0)

