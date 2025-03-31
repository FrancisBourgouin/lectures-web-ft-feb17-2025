import FIRE from "./FIRE";

export default function Header(props) {
  const { amountOfPlants } = props;

  return (
    <header className="Header">
      <FIRE>
        <h1>Kevin's watering world</h1>
      </FIRE>
      <h2>Currently saving {amountOfPlants} plants from dehydation</h2>
    </header>
  );
}
