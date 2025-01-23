import React, { useState } from "react";
import "./TempratureController.css"; // External CSS for styling

const TemperatureControl = () => {
  const [temperature, setTemperature] = useState(0);

  const incrementTemperature = () => {
    setTemperature(() => temperature + 1);
  };

  const decrementTemperature = () => {
    setTemperature(() => temperature-1);
  };

  return (
    <div className={`container ${temperature < 0 ? "aquagreen" : (temperature <= 50 ? "iceblue" : "red")}`}>
      <div className="temperature-circle">
        {temperature}°C
      </div>
      <div className="button-container">
        <button className="control-button" onClick={decrementTemperature}>
          -
        </button>
        <button className="control-button" onClick={incrementTemperature}>
          +
        </button>
      </div>
    </div>
  );
};

export default TemperatureControl;
