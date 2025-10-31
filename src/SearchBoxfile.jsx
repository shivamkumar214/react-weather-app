import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
// import './SeachBoxfile1.css';


export default function SearchBoxfunc({updateinfo}){
    let [city, setCity] = useState("Delhi");

    let API_URL =  import.meta.env.VITE_API_URL;
    // q={city name}&appid={API key} from last of code of API_URL , above url can convert city name to Latitude and Longitude
    
    
    // let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    // ?q={city name},{state code},{country code}&limit={limit}&appid={API key}

    const API_KEY = import.meta.env.VITE_API_KEY;


    // above api_key is my personal key from https://home.openweathermap.org/api_keys
    // 227c9f797e912734a60b682b15892e0

    // let getWeatherInfo = async () => {
    //     try {
    //       const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    //       const data = await response.json();

    //       return {
    //         city: city,
    //         temp: data?.main?.temp ?? 'N/A',
    //         humidity: data?.main?.humidity ?? 'N/A',
    //         pressure: data?.main?.pressure ?? 'N/A',
    //         feels_like: data?.main?.feels_like ?? 'N/A',
    //         temp_max: data?.main?.temp_max ?? 'N/A',
    //         temp_min: data?.main?.temp_min ?? 'N/A',
    //         description: data?.weather?.[0]?.description ?? 'N/A'
    //       };
    //     } catch (error) {
    //       console.error("Error fetching weather:", error);
    //       return {
    //         city: city,
    //         temp: 'N/A',
    //         humidity: 'N/A',
    //         pressure: 'N/A',
    //         feels_like: 'N/A',
    //         temp_max: 'N/A',
    //         temp_min: 'N/A',
    //         description: 'Error fetching weather'
    //       };
    //     }
    // }

    let getWeatherInfo = async (cityName = city) => {
    try {
        const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
        // {console.log(response)}
        const data = await response.json();
        // {console.log(data)}

        return {
            city: cityName,
            temp: data?.main?.temp ?? 'N/A',
            humidity: data?.main?.humidity ?? 'N/A',
            pressure: data?.main?.pressure ?? 'N/A',
            feels_like: data?.main?.feels_like ?? 'N/A',
            temp_max: data?.main?.temp_max ?? 'N/A',
            temp_min: data?.main?.temp_min ?? 'N/A',
            description: data?.weather?.[0]?.description ?? 'N/A'
        };
    } catch (error) {
        console.error("Error fetching weather:", error);
        return {
            city: cityName,
            temp: 'N/A',
            humidity: 'N/A',
            pressure: 'N/A',
            feels_like: 'N/A',
            temp_max: 'N/A',
            temp_min: 'N/A',
            description: 'Error fetching weather'
        };
    }
};
    

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    // let handleSubmit = async (event) => {
    //     event.preventDefault();
    //     // setCity("");
    //     console.log(city);

    //     let newResult = await getWeatherInfo();
    //     updateinfo(newResult);
    //     setCity("");
    // }

    let handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedCity = city.trim();
        console.log(trimmedCity);

        let newResult = await getWeatherInfo(trimmedCity);
        updateinfo(newResult);
        setCity("");
    };

    useEffect(() => {
        const fetchDefaultWeather = async () => {
            const newResult = await getWeatherInfo();
            updateinfo(newResult);
        };

        fetchDefaultWeather();
    }, []); 

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
