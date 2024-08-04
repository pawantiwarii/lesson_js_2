const nameElement = document.querySelector('.name-tag')
const inputTag = document.querySelector('.input-tag')
const ageElement = document.querySelector('.age-tag')
const ageInput = document.querySelector('.inputAge')
const button = document.querySelector('.button-86')
const remove = document.querySelector('.remove')


// new method

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if(myData.name){

    nameElement.innerText = myData.name
}
if(myData.age){

    ageElement.innerText = myData.age
}

inputTag.addEventListener('input', (e)=>{
    myData.name = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    nameElement.innerText = e.target.value

})
ageInput.addEventListener('input', (e)=>{
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    ageElement.innerText = e.target.value

})

button.addEventListener('click', () =>{
    localStorage.clear()
})

remove.addEventListener('click', ()=>{
    localStorage.removeItem(myData)
})











// nameElement.innerText = localStorage.myName

// nameElement.innerText = localStorage.getItem('myName')

// inputTag.addEventListener('input', (e)=>{
//     // console.log(e.target.value);
//     // localStorage.myName = e.target.value
//     localStorage.setItem('myName',  e.target.value)
//     nameElement.innerText = localStorage.getItem('myName')
    
// })
// ageElement.innerText = localStorage.getItem('myAge')
// ageInput.addEventListener('input', (e)=>{
//     localStorage.setItem('myAge', e.target.value)
//     ageElement.innerText = localStorage.getItem('myAge')

// } )