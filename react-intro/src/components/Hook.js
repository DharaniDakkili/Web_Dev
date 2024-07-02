import { useState } from "react";

function Hook(){
   const [counter,setCounter] =useState(0)
   function incrementHandler(){
        setCounter(counter+1);
    }
    function decrementHandler(){
        setCounter(counter-1);
    }
    return(
        <div className="App">
            <h1> Welcome to use state Hook </h1>
            <h2 className="counter">{counter}</h2>
            <button className="btn" onClick={incrementHandler}>Increment</button>
            <button className="btn" onClick={decrementHandler}>decrement</button>

        </div>
    )
}


export default Hook;