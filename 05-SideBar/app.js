
$('.hamburger').on('click', ()=>{
    $('.side').toggleClass('show-side-bar');
});

// $('.hamburger').on('click',()=>{
//     if($('.side').hasClass('show-side-bar')){
//         $('.side').removeClass('show-side-bar');
//     }else{
//         $('.side').addClass('show-side-bar');
//     }
// })

$('.cross').on('click',()=>{
    $('.side').removeClass('show-side-bar');
})