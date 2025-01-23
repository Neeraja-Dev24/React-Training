import React,{useState,useEffect} from 'react'
import "./controller.css";
export default function Controller() {
    const[temperature,setTemperature]=useState(0);
  return (
    <div className={`main-controller ${temperature<=-1?"iceblue" :(temperature>=50?"red":"aquagreen")}`}>
        <div className='temprature'>
            <h3>{temperature}°C</h3>
        </div>
        <div className={`controller `}>
            <button className='minus-controller' onClick={()=>setTemperature(temperature-1)}>-</button>
            <button className='plus-controller' onClick={()=>setTemperature(temperature+1)}>+</button>
        </div>
       
    </div>
  )
}
