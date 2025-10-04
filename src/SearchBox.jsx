import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
import InfoBox from './InfoBox';


export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="4cb5be5fcdab8df92d8a7f1af84bdbec";

    let getWeatherInfo=async()=>{
        try {
             let responce=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponce=await responce.json();
        console.log(jsonResponce);
        let result={
            city:city,
            temp:jsonResponce.main.temp,
            tempMin:jsonResponce.main.temp_min,
            tempMax:jsonResponce.main.temp_max,
            humidity:jsonResponce.main.humidity,
            feelsLike:jsonResponce.main.feels_like,
            weather:jsonResponce.weather[0].description
        };
        console.log(result);
        return result;
        } catch (error) {
            throw error;
        }
       
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit= async(evt)=>{
        try {
             evt.preventDefault();
             console.log({city});
             setCity("")
             let newInfo=await getWeatherInfo();
             updateInfo(newInfo);
        } catch (error) {
            setError(error)
        }
            
    }   
     return(
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit}>
               <TextField id="outlined-basic" label="City Name" 
               variant="outlined" required value={city}
               onChange={handleChange}/>
               <br></br><br></br>
                 <Button variant="contained" type='submit'>Submit</Button>
                 {error&&<p style={{color:"red"}}>No such place exist in our API</p>}
            </form>
        </div>
        
    )
}