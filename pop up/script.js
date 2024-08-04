const popup = document.querySelector('.popup-container');
const openButton = document.querySelector('button');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay')



openButton.addEventListener('click',(e)=>{
    
    popup.classList.add('popup-open')
})

closeIcon.addEventListener('click',()=>{
    popup.classList.remove('popup-open')
})

overlay.addEventListener('click',()=>{
    popup.classList.remove('popup-open')
})