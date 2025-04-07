export default function CurrentWeather(props) {
  const { weatherData } = props;

  
  if(!weatherData){
    return <h1>HEY DUM DUM PUT SOME DATA IN HERE</h1>
  }
  
  const parsedTemp = Math.round(weatherData.main.temp - 273.15) + "°C"

  return (
    <section className="CurrentWeather">
      <h1>Weather conditions for {weatherData.name}</h1>
      <p>Temperature: {parsedTemp}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Conditions: {weatherData.weather[0].description}</p>
    </section>
  );
}
