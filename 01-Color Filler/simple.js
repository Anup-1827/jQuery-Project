const colors = ['red', 'green', 'blue', 'yellow', 'brown']

$(document).ready(function(){
    $('.btn').on('click',()=>{
        let randomNumber = getRandomNumber();
        $('.color-name').text(colors[randomNumber]);
       // $('.color-name').text('green');
        $('.container').css('background-color', colors[randomNumber]);
    });
})

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
}