# Weather App!

Build a web app where we can search for a city, and get the current weather from that city.

- Search for a city
- City history (Show buttons for previously searched cities)
- See temperature, current conditions and humidity level

## Data

### History

We will store only the city for now, think about about caching later

```js
const cityHistory = ["City","City","City","City"]
```

### Weather Data:
APIKEY: 09fd719b4b698ec0260e424f83378e3d
APIURL: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
Temps are in kelvin
Humidity is in percentage

Kelvin => Celsius (K - 273.15)

Temperature: weatherData.main.temp
Humidity: weatherData.main.humidity
Conditions: weatherData.weather[0].description

```js
                          
const weatherData = {
   "coord": {
      "lon": 7.367,
      "lat": 45.133
   },
   "weather": [
      {
         "id": 501,
         "main": "Rain",
         "description": "moderate rain",
         "icon": "10d"
      }
   ],
   "base": "stations",
   "main": {
      "temp": 284.2,
      "feels_like": 282.93,
      "temp_min": 283.06,
      "temp_max": 286.82,
      "pressure": 1021,
      "humidity": 60,
      "sea_level": 1021,
      "grnd_level": 910
   },
   "visibility": 10000,
   "wind": {
      "speed": 4.09,
      "deg": 121,
      "gust": 3.47
   },
   "rain": {
      "1h": 2.73
   },
   "clouds": {
      "all": 83
   },
   "dt": 1726660758,
   "sys": {
      "type": 1,
      "id": 6736,
      "country": "IT",
      "sunrise": 1726636384,
      "sunset": 1726680975
   },
   "timezone": 7200,
   "id": 3165523,
   "name": "Province of Turin",
   "cod": 200
}                    
                        
```

## Mock Data

## Structure

### Packages

### HTML

### Components

### Component Data
