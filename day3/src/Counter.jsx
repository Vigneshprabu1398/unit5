import { useState } from "react";

export function Counter(){
const [counter, setCounter] = useState(0);
const handleChange = (value) =>{
    setCounter(counter + value);
}
const handleChange1 = (value) =>{
    setCounter(counter * value);
}
return(
    <>
    <h3>Counter : {counter}</h3>
    <button onClick={()=>{
        handleChange(1)
    }}>
        Add
    </button> 
    <button onClick={()=>{
        if(counter >=1)  handleChange(-1)
    }}>
        Sub
    </button> 
    <button onClick={()=>{
        handleChange1(2)
    }}>
        Mul 2
    </button> 
    </>
)

}