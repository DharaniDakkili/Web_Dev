let lightTheme=true;

 
let btnLight= document.querySelector('.btnLight');
btnLight.style.display='none';
btnLight.addEventListener('click',changeColor);

function changeColor(){

    if (lightTheme ==true){
    
    let text=document.querySelectorAll('.text');
    for(i=0;i<text.length;i++){
        text[i].style.color='white';

    }
    
    let body= document.querySelector('body');
    body.style.backgroundColor='black';
    let logo=document.querySelector('.logo');
    logo.style.color='white';

   lightTheme=false;
   
   btn.style.display= 'none';
   btnLight.style.display= 'block';

    }

    else{
        btn.style.display= 'block';
   btnLight.style.display= 'none';
        
   let text=document.querySelectorAll('.text');
   for(i=0;i<text.length;i++){
       text[i].style.color='black';

   }
   
   let body= document.querySelector('body');
   body.style.backgroundColor='white';
   let logo=document.querySelector('.logo');
   logo.style.color='black';

  lightTheme=true;
        

    }
}


let btn= document.querySelector('.btnDark');

btn.addEventListener('click',changeColor);







