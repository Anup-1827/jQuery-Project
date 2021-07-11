const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');

const side = document.querySelector('.side');

hamburger.addEventListener('click', ()=>{
    side.classList.add("show-side-bar");

});

cross.addEventListener('click', ()=>{
    side.classList.remove("show-side-bar");

});