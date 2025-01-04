
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Weatherdisplay from "./Weatherdisplay";

const App = () => {
  const [weather, setweather] = useState({temperature:0, conditions:""});

  useEffect(()=>{
    const weatherinput = {temperature:25, conditions:"Sunny"};
    setweather(weatherinput);

  },[])
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
    <h1>Weather Report</h1>
    <Weatherdisplay weather={weather}/>
  </div>
  )
}

export default App
