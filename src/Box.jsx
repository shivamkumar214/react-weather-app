import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import './WeatherAPP.css';

export default function InfoBox({info}){

    const Hot_img = "https://tse2.mm.bing.net/th/id/OIP.kazE3eWU1CehiR-xJi1g1gHaE8?pid=Api&P=0&h=180";
    const Cold_img = "https://tse4.mm.bing.net/th/id/OIP.debaDUCrSwMCZ-r2rP42BQHaE7?pid=Api&P=0&h=180";
    const Rainy_img = "https://tse2.mm.bing.net/th/id/OIP.6-Lsr3x7sGh5haOFU9GUKAHaD7?pid=Api&P=0&h=180";

    function image_cheker() {
        return info.temp === "N/A"
          ? "https://tse1.mm.bing.net/th/id/OIP.9cR5To2R3WWT1t-axc7_LgHaHa?pid=Api&P=0&h=180" : info.humidity > 80
            ? Rainy_img : info.temp > 15
              ? Hot_img : Cold_img;
    }


    return (
      <div className='textweather'>
        <br /> 
        {/* className='textweather' */}

        <Card sx={{ maxWidth: 345 }}>

          <CardMedia sx={{ height: 180 }}
            image={ image_cheker() }
            // <img src={image_cheker()} alt="weather" />

            // title="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h3>{info.city}</h3>
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>

              <p> Temprature = { info.temp }&deg;C </p>
              <p> Humidity = {info.humidity} </p>
              <p> Pressure = {info.pressure} </p>
              <p> description = {info.description} </p>
            
              <p> temp_max = {info.temp_max}&deg;C </p>
              <p> temp_min = {info.temp_min}&deg;C </p>
              <p>The weather can be described as {info.description} and feels like {info.feels_like}&deg;C </p>

            </Typography>
          </CardContent>
      
        </Card>

      </div>
  );
}