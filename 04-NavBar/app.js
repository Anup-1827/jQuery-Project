// $('.hamburger').on('click', ()=>{
//     if($('.header').hasClass('show-list')){
//         $('.header').removeClass('show-list');
//     }else{
//         $('.header').addClass('show-list')
//     }
// })

$('.hamburger').on('click', ()=>{
    console.log('Anup')
    $('.header').toggleClass('show-list');
})

