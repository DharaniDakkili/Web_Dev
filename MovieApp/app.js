let API = 'http://www.omdbapi.com/?i=tt3896198&apikey=d0acea54&t='

// let API ='http://www.omdbapi.com/?apikey=61e576a4&t=';
let loadingStatus = false;
let Title=document.getElementById('Title');
let Plot= document.getElementById('Plot');
let img= document.getElementById('img');
let Actors =document.getElementById('Actors');
let Awards = document.getElementById('Awards');
let BoxOffice = document.getElementById('BoxOffice');
let Director= document.getElementById('Director');
let Writer =document.getElementById('Writer');
let Released = document.getElementById('Released');
let Year = document.getElementById('Year');

let imdbRating = document.getElementById('imdbRating');
movieContainer.classList.add('d-none');
errorContainer.classList.add('d-none');




function checkLoader(){
let content = document.getElementById('content');
 content.style.display='none';
 

 let loader = document.getElementById('loader');
 if (loadingStatus == true){
  loader.classList.add('loader')
 }
 else{
  loader.classList.remove('loader')
 }
}

function renderMovie(){

}

function fetchMovieDetails(){
  loadingStatus=true;
  checkLoader();
let movieName = document.getElementById('movieName');
let apiQuery = API + movieName.value;
console.log(apiQuery)
  fetch(apiQuery).then((response)=>{
      return response.json();
    }).then((data)=> {
      console.log(data);
      if (data.Error!= 'Movie not found!'){
      loadingStatus = false;
    checkLoader();
    img.src = data.Poster;
    Title.innerText = data.Title;
    Plot.innerText = data.Plot;
    Actors.innerText= data.Actors;
    Awards.innerText= data.Awards;
    BoxOffice.innerText= data.BoxOffice;
    Director.innerText= data.Director;
    Writer.innerText= data.Writer;
    Released.innerText= data.Released;
    Year.innerText= data.Year;
    imdbRating.innerText= data.imdbRating;

    movieContainer.classList.remove('d-none');
    errorContainer.classList.add('d-none');
    }   
   else{
    movieContainer.classList.add('d-none');
    errorContainer.classList.remove('d-none');
    loadingStatus = false;
    checkLoader();
   }

    })
    
  
 }