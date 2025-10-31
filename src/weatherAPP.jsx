import SearchBoxfunc from './SearchBoxfile';
import InfoBox from './Box.jsx';
import "./WeatherAPP.css";
import { useState } from 'react';

export default function weatherAPP(){

    let [weatherdata, setWeatherdata] = useState({
        city: "Delhi", 
        temp: "N/A",
        humidity: "N/A",
        pressure: "N/A",
        feels_like: "N/A",
        temp_max: "N/A",
        temp_min: "N/A",
        description: "N/A" 
    });

    // let updateinfo = (result) => {
    //     setWeatherdata(result);
    // }

    return (
        <div>
            <SearchBoxfunc 
                updateinfo={
                    (result) => {
                        setWeatherdata(result);
                }}  
            />
            <InfoBox info={weatherdata}/>
        </div>
    );
}