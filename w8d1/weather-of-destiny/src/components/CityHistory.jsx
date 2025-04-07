export default function CityHistory(props) {
  const { cities, fetchWeather } = props;

  const parsedCityButtons = cities.map((city) => (
    <li key={city}>
      <button onClick={() => fetchWeather(city)}>{city}</button>
    </li>
  ));
  return (
    <section className="CityHistory">
      {!!cities.length && <h1>Click on a city to fetch its weather again</h1>}
      {!cities.length && <h1>Search for a city to add it to the list</h1>}
      <ul>
        {parsedCityButtons}
      </ul>
    </section>
  );
}
