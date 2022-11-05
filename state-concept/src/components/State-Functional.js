import { useState } from "react";

function StateFunctional()
{
    const [counter,setCounter] =useState(0)
    const [decreCounter,setDecreCounter]=useState(50)
    function decrement(){
        setDecreCounter(decreCounter-1)
    }

    function increment()
    {
        setCounter(counter+1)
    }
    return(
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={increment}>Increment</button>

            <h3>Decrement Counter : {decreCounter}</h3>
            <button onClick={decrement}>Decrement</button>
        </div>
    )

}
export default StateFunctional