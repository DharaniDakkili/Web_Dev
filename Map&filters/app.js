//squares
// let a=[1, 2, 3, 4, 5, 6, 7, 8]
// function sqr(num){
//     return num*num;
// }
// let result=a.map(sqr);
// console.log(result);

// //cubes

// let cube =a.map((num)=>(num*num*num))
// console.log(cube);

// //filter
// //greater than 5
// let output=a.filter((num)=>{
//     return num>5;
// })
// console.log(output);
// //even numbers
// let res=a.filter((x)=>{
//     return x%2==0;
// })
// console.log(res);
// //even squares
// //chaining
// let chaining= a.filter((x)=>{
//     return x%2==0;
// }).map((x)=>{
//     return x*x;
// }
// )

// console.log(chaining);




// let data = res.map((num)=>{
//     return num.distance;
// })

// let data = res.filter((num)=>{
//     // if(num.distance==0){
//     //     console.log(num.phone);

//     // }
//     return num.distance==0;
   

    
// })
// console.log(data)

let users=[];
function register(){
  let name= document.getElementById('name');  
  let email= document.getElementById('email'); 
  // document.getElementById('name').innerText=name.value;
  // document.getElementById('email').innerText=email.value;
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
    alert('user email is already exists');
  }
  
  console.log(users);
}