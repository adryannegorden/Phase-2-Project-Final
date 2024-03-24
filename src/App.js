import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Login />
      <Home />
      <About />
    </div>
  );
}

export default App;