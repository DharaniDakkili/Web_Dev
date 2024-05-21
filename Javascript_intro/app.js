// // string,Number,Boolean,object,arrays

// let firstName='Raj';
// let age=20;
// console.log("His name is"+" " + firstName, "And his age is"+" " +age);
// console.log(typeof age);
// //boolean
// let isuserAlive=true;
// console.log(typeof isuserAlive);

// //array
// let items=['a','b','c','d','e','f'];
// console.log(items);
// items.push('g');
// items[2]='h';
// console.log(items);
// items.pop();
// console.log(items);
// items.splice(0,1,'t','v');
// console.log(items);
// //object
// let user ={
//     name:'Ram',
//     email:'ram@gmail.com',
//     age:40,
//     address: 'Ameerpet'
// }

// console.log(user.email);
// delete user.name;
// console.log(user);



// let users=[
//     {userName:'sid',email:'sid@gmail.com',age:20,phno:9876543890},
//     {userName:'dheer',email:'sid@gmail.com',age:20,phno:9876543890},
//     {userName:'srav',email:'sid@gmail.com',age:20,phno:9876543890},
//     {userName:'ramesh',email:'sid@gmail.com',age:20,phno:9876543890},
// ]
// console.log(users[1].phno);
// console.log(users);

// //functions

// function mul(a,b){

//     console.log(a*b);
// }
// mul(5,5);
// mul(5,5);
// //or

// function add(a,b){
//     let sum= a+b;
//     return sum;
    
// }
// console.log(add(5,6));

function joined(){
    let title = document.getElementById("title");
    title.innerText='Thanks for joining the bootcamp!';
    title.style.color='tomato';
    let btn=document.getElementById('btn');
    btn.style.display='none';
}
function welcome(){
    let name=document.getElementById('name');
    document.getElementById('namehead').innerText=name.value;
    name.value='';
}