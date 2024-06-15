
// function notify(){
//     console.log("Email sent");
// }


// function  uploading(){
   


// }

// uploading();



// let test = new Promise((resolve, reject)=>{

//     setTimeout(() => {
//         console.log("Recording uploaded!");
//         resolve();
//     }, 2000);
   
// }).then(()=>{
//     notify();
// }
// )


function generateQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let random = Math.floor(Math.random()*data.length);
      document.getElementById('quote').innerText =data[random].text;
      document.getElementById('author').innerText=data[random].author;

    });
}






























