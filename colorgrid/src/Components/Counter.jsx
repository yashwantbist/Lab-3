import { useState } from "react";




export default function Counter(){
let [counter, setCounter] = useState(0);

return(
    <div>
        <h1>{counter}</h1>
        { console.log(counter)}
        <button onClick={() =>setCounter(counter < 10 && counter + 1 )} >Increment</button>  
        <button onClick={() =>setCounter(counter >-10 &&counter - 1)} >Decrement</button>  
        <br />
        <button onClick={() =>setCounter(0)} >Reset</button>  


    </div>
)

}


/*
let counter = 0; 
return(
    <div>
    <h1>{counter}</h1>
<button onClick={() => {
    counter++;
    console.log(counter);

}

}>Add</button>
    </div>
    */