import { useEffect, useState } from "react";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CurrentWeather from "./components/CurrentWeather";
import CityHistory from "./components/CityHistory";

import "./App.css";
import { sampleWeatherData } from "./data/weatherData";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cities, setCities] = useState([]);

  const fetchCities = () => {
    axios
      .get("/api/cities")
      .then((res) => res.data)
      .then(setCities)
      .catch((err) => console.log(err));
  };

  const fetchWeather = (city) => {
    axios
      .get(`/api/weather/${city}`)
      .then((res) => res.data)
      .then(setWeatherData)
      .then(() => {
        if (!cities.includes(city)) {
          axios
            .post("/api/cities", { city })
            .then((res) => res.data)
            .then((data) => {
              setCities([...cities, data]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
  };

  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    const report = event => console.log("clicked!", event.clientX, event.clientY, weatherData?.name)

    document.addEventListener("click", report)
    console.log("Add the event listener")
    
    return () => {
      document.removeEventListener("click", report)
      console.log("Removed the event listener")
    }
  });


  return (
    <>
      <Header />
      {/* <button onClick={fetchCities}>FETCH CITIES!</button> */}
      <CityForm onSubmit={(formData) => fetchWeather(formData.city)} />
      {!!weatherData && <CurrentWeather weatherData={weatherData} />}
      <CityHistory cities={cities} fetchWeather={fetchWeather} />
    </>
  );
}

export default App;
