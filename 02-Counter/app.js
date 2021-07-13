$(document).ready(function(){
  let count = 0;

  $('.decrease').on('click',()=>{
    count--;
    $('#value').text(count);
    if(count < 0){
      $('#value').css('color','red');
    }
  })
  
  $('.increase').on('click',()=>{
    count++;
    $('#value').text(count);
    if(count > 0){
      $('#value').css('color','green');
    }
  })

  $('.reset').on('click',()=>{
    count = 0;
    $('#value').text(count).css('color','black');
  })
  
})