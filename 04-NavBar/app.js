const hamburger = document.querySelector('.hamburger');
const header =document.querySelector('.header');

// hamburger.addEventListener('click', ()=>{
//     if(header.classList.contains('show-list')){
//         header.classList.remove('show-list');
//     } else{
//         header.classList.add('show-list');
//     }

// })


hamburger.addEventListener('click',()=>{
    header.classList.toggle('show-list');
})