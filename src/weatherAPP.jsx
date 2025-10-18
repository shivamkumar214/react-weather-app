import SearchBoxfunc from './SearchBoxfile';
import InfoBox from './Box.jsx';
import "./WeatherAPP.css";
import { useState } from 'react';

export default function weatherAPP(){

    let [weatherdata, setWeatherdata] = useState({
        city: "Delhi", 
        temp: 32.27,
        humidity: 64,
        pressure: 995,
        feels_like: 39.03,
        temp_max: 32.27,
        temp_min: 32.27,
        description: "broken clouds"
    });

    let updateinfo = (result) => {
        setWeatherdata(result);
    }

    return (
        <div>
            <SearchBoxfunc updateinfo={updateinfo}/>
            <InfoBox info={weatherdata}/>
        </div>
    );
}