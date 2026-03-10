import React, { useState } from "react";
import "./newApp.css";

function MyApp() {
  const [counterValu, setCounterValu] = useState(0);
  const incrementValue = () => {
    setCounterValu(counterValu + 1);
  };
  const decrementValue = () => {
    setCounterValu(counterValu - 1);
  };
  return (
   <div className="counterApp">
    <div className="counterContainer">
        <button className="decrementValue" onClick={decrementValue}>-</button>
        
        <span className="counterValue" >{counterValu}</span>
        
        <button className="incrementValue" onClick={incrementValue}>+</button>
    </div>
</div>
  );
}

export default MyApp;
