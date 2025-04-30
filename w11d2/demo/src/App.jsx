import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const [user, setUser] = useState(null);

  const fakeLogin = (formData) => {
    setUser(formData.email);

    console.log(formData);
    navigate("/dashboard");
  };

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<h1>I'm home!</h1>} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login onSubmit={fakeLogin} />} />
      </Routes>
    </>
  );
}

export default App;
