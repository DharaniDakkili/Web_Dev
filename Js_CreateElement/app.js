


let users=[]
function renderUsers(){
    let userContainer=document.getElementById('users');
    userContainer.innerHTML='';
    users.map((user)=>{
        let div = document.createElement('div');
        let userName = document.createElement('p');
        let userEmail = document.createElement('p');
        div.classList.add('user');

        userName.innerText=user.name;
        userEmail.innerText=user.email;
        

        userContainer.appendChild(div);
        div.appendChild(userName);
        div.appendChild(userEmail);
  
    })

}
function register(){
 let name=document.getElementById("name");
 let email=document.getElementById("email");
  let tempUser={
    name:name.value,
    email:email.value
  }

  let emailCount=users.filter((user)=>{
    return user.email==email.value;

  
  })
  
  if(emailCount.length==0){
    users.push(tempUser);
  }
  else{
    alert('User email is already exists')
  }
 
 renderUsers()
}

