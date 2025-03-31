import { checkIfWellWatered } from "../helpers/plantHelpers";
import FIRE from "./FIRE";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval);

  const classes = isWellWatered ? "PlantListItem happy" : "PlantListItem sad";



  return (
    <li className={classes}>
      <h1>{name}</h1>
      <h2>{type}</h2>
      {isWellWatered && <p>Last watered on: {lastWatered}</p>}
      {!isWellWatered && (
        <FIRE>
          <p>Last watered on: {lastWatered}</p>
        </FIRE>
      )}
    </li>
  );
}
