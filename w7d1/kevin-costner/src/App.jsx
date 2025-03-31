import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsArr } from "./data/plantData";


function App() {
  return (
    <>
      <Header amountOfPlants={plantsArr.length} />
      <main>
        <h1>Current plants</h1>
        <PlantList plants={plantsArr} />
      </main>
    </>
  );
}

export default App;
