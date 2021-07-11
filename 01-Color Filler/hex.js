const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B", "C", "D", "E", "F"];

$('#btn').on('click', ()=>{
    let hex = "#";
    for(let i = 0; i<6;i++){
        randomNumber = getRandomNumber();
        hex += colors[randomNumber];
    }
    console.log(hex);
    $('color-name').text(hex);
    $('.container').css('background-color', hex);
});

const getRandomNumber = ()=> Math.floor(Math.random()*colors.length);