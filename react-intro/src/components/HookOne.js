import { useState } from "react";
import Card from '../components/Card';
import image from '../image/photo-1607532941433-304659e8198a.avif'

let foodItem={
    title: "Spaghetti Carbonara",
    image: "https://source.unsplash.com/1600x800/?spaghetti",
    price: 199,
    rating: 4.5,
    desc: "Classic Italian pasta dish with creamy egg sauce, pancetta, and Parmesan cheese.",
    votes: 410
}
function HookOne(){
   const [counter,setCounter] =useState(0);
   const [showCard, setShowCard]=useState(false);
   function incrementHandler(){
        setCounter(counter+1);
    }
    function decrementHandler(){
        setCounter(counter-1);
    }
    function showCardHandler(){
      setShowCard(true);
    }
    function hideCardHandler(){
        setShowCard(false);
    }
    return(
            <div>
            <div className="App">
            <h1> Welcome to use state Hook </h1>
            {/* <h2 className="counter">{counter}</h2> */}
            <button className={showCard==false ? 'btn':'d-none'} onClick={showCardHandler}>Show Card</button>
            <button className={showCard==true ? 'btn':'d-none'} onClick={hideCardHandler}>Hide Card</button>
            
            </div>

            <div className="flex">
            <div className={showCard==true ? 'card' : 'd-none'}>
            <div className="card-header">
            <img src={require('../image/photo-1607532941433-304659e8198a.avif')} className="card-img"/>
            <p className="ratings">4.5 ratings</p>
            </div>
            
            <div className="card-flex">
            <h3>Spaghetti Carbonara</h3>
            <p className='must-try'>Must Try</p> 
            </div>
            
            <p>199</p>
            <p> Classic Italian pasta dish with creamy egg sauce, pancetta, and Parmesan cheese.</p>
        </div>
            </div>
            </div>
           

        
    )
}


export default HookOne;