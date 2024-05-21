function test(){
    console.log("test function called");
}

function mouseOver(){
    let alertDiv= document.getElementById("alertDiv");
    alertDiv.style.display = "block";   
}

function mouseOut(){
    alertDiv.style.display = "none";    
}

function submitBtn(){
    let name = document.getElementById("name");
    document.getElementById("userInput").innerText= name.value;
    // name.value='';
}
function statuscheck(){
    if(magicStatus==true){
       magicbtn.style.display='none';
       stopMagicbtn.style.display='block';
    }
    else{
        stopMagicbtn.style.display='none';
        magicbtn.style.display='block';
    }
}
let magicStatus=false;
let magicbtn= document.getElementById("magic");
let stopMagicbtn= document.getElementById("stopMagic");


function magic(){
    magicStatus=true;
    let title=document.getElementById("title");
    title.classList.add("magic");
    statuscheck();
   

}

function stopMagic(){
    magicStatus=false;
    let title=document.getElementById("title");
    title.classList.remove("magic");
    statuscheck();
}

//arrow functions:

add =(num1,num2) =>{
console.log(num1+num2);
}
add(2,3);

//or

add=(num1,num2)=>(num1+num2)
console.log(add(3,4))