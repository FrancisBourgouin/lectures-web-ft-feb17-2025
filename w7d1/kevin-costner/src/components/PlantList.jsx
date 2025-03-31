import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;

  // const parsedPlants = plants.map(plant => <PlantListItem />)
  // const parsedPlants = plants.map(plant =>
  //   <PlantListItem
  //     key={plant.id}
  //     name={plant.name}
  //     type={plant.type}
  //     lastWatered={plant.lastWatered}
  //     wateringInterval={plant.wateringInterval}
  //   />
  // )
  
  const parsedPlants = plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);
  return <ul className="PlantList">{parsedPlants}</ul>;
}
