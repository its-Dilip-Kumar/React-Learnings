import React, { useState } from "react"
import ReactDOM from "react-dom/client"






function App(){
    
    let [count,setCount]=useState(0);


    function IncrementNumber(){
        count=count+1;
        setCount(count);
    }

    function DecrementNumber(){
        count=count-1;
        setCount(count);
    }
    return (
        <>
        <h1>Counter:{count}</h1>
        <div className="buttons">
        <button onClick={IncrementNumber}>Increment {count}</button>
        <button onClick={DecrementNumber}>Decrement {count}</button>
        </div>
        </>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
