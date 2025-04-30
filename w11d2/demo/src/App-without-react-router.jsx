import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Link(props){
  const {target, setMode} = props

  const handleClick = event => {
    event.preventDefault()

    setMode(target)
  }
  return (
    <a onClick={handleClick}>{props.children}</a>
  )
}

function App() {
  const [mode, setMode] = useState(window.location.pathname);

  return (
    <>
      <header>
        <Link target="HOME" setMode={setMode}>Home!</Link>
        <button onClick={() => setMode("HOME")}>Home!</button>
        <button onClick={() => setMode("DASHBOARD")}>Dashboard!</button>
        <button onClick={() => setMode("LOGIN")}>Login!</button>
      </header>
      {mode === "HOME" && <h1>I'm home!</h1>}
      {mode === "DASHBOARD" && <h1>I'm dashboard!</h1>}
      {mode === "LOGIN" && <h1>I'm login!</h1>}
    </>
  );
}

export default App;
