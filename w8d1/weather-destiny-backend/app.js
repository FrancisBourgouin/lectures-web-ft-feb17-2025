const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sampleWeatherData } = require("./data/weatherData");
const axios = require("axios");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const dataCache = {}

app.get("/api/weather/:city", (req, res) => {
  const { city } = req.params;

  const apiKey = "09fd719b4b698ec0260e424f83378e3d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  if(dataCache[city]){
    return res.json(dataCache[city]);
  }

  axios
    .get(url)
    .then((res) => res.data)
    .then((data) => {
      data.name = city;
      res.json(data);
      
      data.cached = true
      dataCache[city] = data
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("CITY NOT FOUND");
    });
});

const cities = [];
app.get("/api/cities", (req, res) => {
  res.json(cities);
});

app.post("/api/cities", (req, res) => {
  const { city } = req.body;
  cities.push(city)
  console.log(cities)
  res.json(city)
});

module.exports = app;
