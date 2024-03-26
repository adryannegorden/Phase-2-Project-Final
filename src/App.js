import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Login from "./components/Login";
import OtterFacts from "./pages/OtterFacts";

function App() {
  return (
    <body className="h-screen bg-gradient-to-b from-indigo-200 to-indigo-400">
      <div>
        <NavBar />
        <Login />
        <Home />
        <About />
      </div>
    </body>
  );
}

export default App;