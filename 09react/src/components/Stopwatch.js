import { useEffect, useState } from "react"

export const Stopwatch = () =>{

    const [timer, setTimer] = useState(10);

    useEffect(()=>{
        const id = setInterval(()=>{
            console.log("Interval", timer);
            setTimer((prev) =>{ 
               
                return prev - 1
            });
        }, 500);

        return(()=>{
            clearInterval(id);
            console.log("Timer has Stopped");
        })
    }, []);

    return (
        <div className="timer">Timer: {timer}</div>
    )
}