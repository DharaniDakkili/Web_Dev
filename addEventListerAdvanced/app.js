let users=[]

let userDetails=document.getElementById('userDetails');

let leftContainer=document.getElementById('leftContainer');
let userDetailsContainer=document.getElementById('userDetails-container')
userDetails.style.display='none';

showUserDetailsUserDetails=(e)=>{
    userDetails.style.display='block'; 
    leftContainer.style.display='none';
    let email =e.target.innerText;
    let result =users.find((user)=>{
 return user.email==email;
    }
        
    )

    let nameElement=document.createElement('p');
    let emailElement=document.createElement('p');
    nameElement.innerText=result.name;
    emailElement.innerText=result.email;
    userDetailsContainer.appendChild(nameElement);
    userDetailsContainer.appendChild(emailElement);


}
goback=()=>{
    userDetails.style.display='none'; 
    leftContainer.style.display='block';   
}

function renderUsers(){
    let userContainer=document.getElementById('users');
    userContainer.innerHTML='';
    
    users.map((user)=>{
        let div =document.createElement('div');
        // let userName=document.createElement('p');
        let userEmail=document.createElement('p');
        div.classList.add('user');
      userEmail.addEventListener('click', showUserDetailsUserDetails)
    //    userName.innerText=user.name;
       userEmail.innerText=user.email;

       userContainer.appendChild(div);
    //    div.appendChild(userName);
       div.appendChild(userEmail);

        
    })
}







function register(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');

    let tempUser= {
        name:name.value, 
        email:email.value
    }

    let emailCount= users.filter((user)=>{
        return user.email==email.value;
    })

    if(emailCount.length==0){
        users.push(tempUser);
    }
    
    else{
        alert('User email is already exist')
    }

    renderUsers()
}