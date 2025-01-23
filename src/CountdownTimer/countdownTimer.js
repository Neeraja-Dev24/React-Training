import React,{useState,useEffect} from "react";
import "./countdownTimer.css";
const CountdownTimer=()=>{
    const[seconds, setSeconds]=useState("600");
    useEffect(()=>{
        if (seconds <= 0) return;

        const timerId = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    
        return () => clearInterval(timerId); 
    },[seconds]);
    const formatTime = (secs) => {
        const minutes = String(Math.floor(secs / 60)).padStart(2, "0");
        const remainingSeconds = String(secs % 60).padStart(2, "0");
        return `${minutes}:${remainingSeconds}`;
      };
    return(
        <div className="timer-container">
            <h1 className="timer-title">Break Timer</h1>
            <div className="timer-display">{formatTime(seconds)}</div>
        </div>
    )

}
export default CountdownTimer;