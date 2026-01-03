import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => {
    const [weather,setweather]=useState(null);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState("");
    const [place,setplace]=useState("");
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    const fetchweather=async()=>{
        if(!place)return;

        setloading(true);
        seterror("");
        setweather(null);

        try{
            const response=await axios.get(
                "https://api.openweathermap.org/data/2.5/weather",
                {
                    params:{
                        q:place,
                        appid:API_KEY,
                        units:"metric"
                    }
                }
            );
            setweather(response.data);
        }

        catch(err){
            seterror("Place not found")
        }
        finally{
            setloading(false);
        }

    }

  return (
    <div className='flex flex-row gap-3 p-4'>
        <input type="text" placeholder='Enter City' value={place} onChange={(e)=>setplace(e.target.value)}
        className='border p-2 text-black' />

        <button onClick={fetchweather} className='border border-2 border-white rounded-xl p-2'>Fetch the weather</button>

        {weather && (
            <div>
                <h2>{weather.name}</h2>
                <h2>{weather.main.temp}</h2>
                <p>{weather.weather[0].description}</p>
            </div>
        )}
    </div>
  )
}

export default Weather