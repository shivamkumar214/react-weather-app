import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
// import './SeachBoxfile1.css';


export default function SearchBoxfunc({updateinfo}){

    let [city, setCity] = useState("");

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // q={city name}&appid={API key} from last of code of API_URL , above url can convert city name to Latitude and Longitude
    
    
    // let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    // ?q={city name},{state code},{country code}&limit={limit}&appid={API key}

    const API_KEY = "a227c9f797e912734a60b682b15892e0";

    // above api_key is my personal key from https://home.openweathermap.org/api_keys

    let getWeatherInfo = async () => {
        let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let responseJson = await response.json();
        console.log("call");
       
        return {
            city: city,
            temp: responseJson?.main?.temp ?? "N/A",
            humidity: responseJson?.main?.humidity ?? "N/A",
            pressure: responseJson?.main?.pressure ?? "N/A",
            feels_like: responseJson?.main?.feels_like ?? "N/A",
            temp_max: responseJson?.main?.temp_max ?? "N/A",
            temp_min: responseJson?.main?.temp_min ?? "N/A",
            description: responseJson?.weather?.[0]?.description ?? "N/A"
        };
        // console.log(result);
        // return result;
    }
    

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        // setCity("");
        console.log(city);

        let newResult = await getWeatherInfo();
        updateinfo(newResult);
        setCity(city);
    }

    return (
        <div className='weatherstyle'>
            <h1>Search For The Weather</h1>

            <form onSubmit={handleSubmit} className='textweather'>

                <TextField id="outlined-basic"
                 label="City Name"
                 variant="outlined" 
                 value={city} 
                 onChange={handleChange} 
                 required
                /> 
                {/* requierd is used to clearify to user that it is neccesary to fill this form  */}

                <br /><br />

                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>

        </div>
    );
}