const image = document.querySelector("img");
const button = document.querySelector("button");
const timer = document.querySelector(".timer");

// button.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest()

//     console.log(xhr);
//     xhr.responseType = 'json'

//     xhr.addEventListener('load', () =>{
//         console.log(xhr.response);
//         image.src = xhr.response.message

//     })

//     xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
//     xhr.send()
// })

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  console.log(xhr);
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    image.src = xhr.response.message;
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random", false);

  xhr.send();
});

// setTimeout(() => {
//   console.log("HII");
// }, 4000);

// const blockingBtn = document.querySelector('.blocking-btn')

// blockingBtn.addEventListener('click', () =>{
//     const startTime = Date.now()
//     let currentTime = startTime
//     while(startTime + 8000 > currentTime){
//         currentTime = Date.now()
//     }

// })







// timer in javaScript for 30 second

let timeLeft = 30;
let timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
  } else {
    timer.innerHTML = timeLeft - 1 + " remaining second";
    timeLeft--;
  }
}
