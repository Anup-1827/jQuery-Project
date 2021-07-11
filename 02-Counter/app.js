let count = 0;

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach( (btn)=>{
btn.addEventListener('click', (e)=>{
  const  classes = e.currentTarget.classList; 
  if(classes.contains('decrease')){
    count--;
  }
  else if(classes.contains('increase')){
    count++;
  }
  else{
      count = 0;
  }
  value.textContent = count;

  if(count < 0){
    value.style.color = "red";
  }
  else if(count > 0){
    value.style.color = "green";
  }
  else{
    value.style.color = "black";
  }
})

})