const button = document.querySelector('button')
const img = document.querySelector('img')

button.addEventListener('click', ()=>{
    const xhr = new XMLHttpRequest()
    console.log(xhr);
    xhr.responseType = 'json'
    xhr.addEventListener('load', ()=>{
        img.src = xhr.response.message
        
        // console.log(JSON.parse(xhr.response));
        console.log(xhr.response);
        
    })
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr.send()

    
})