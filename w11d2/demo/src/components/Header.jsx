import { useState } from "react";
import { Link } from "react-router";

export default function Header(props) {
  const [count, setCount] = useState(0);

  return (
    <header>
      <h1>Routing of destiny!</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
    </header>
  );
}
