import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
  let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.54,
        temp:25.5,
        tempMin:25.5,
        tempMax:25.5,
        humidity:47,
        weather:"haze"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App By Aman</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}