import { useState } from "react";
import React from "react";
function Count(){
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)

    };
    function decrement(){
        if(count>0){
        setCount(count-1)
        }

    };
    function reset(){
        setCount(0)

    };

return(
        <div>
            <h1 style={{color:"pink"}}>Count Features</h1>
            <h1>{count}</h1>
            <button onClick={increment} style={{backgroundColor:"blue",marginRight:"10px"}}>Increment</button>
            <button onClick={decrement} style={{backgroundColor:"blue",marginRight:"10px"}}>Decrement</button>
            <button onClick={reset} style={{backgroundColor:"blue"}}>Reset</button>

        </div>

    );
}
export default Count;