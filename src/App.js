import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Comments from "./components/Comments";

function App() {
  return (
    <body className="h-screen bg-gradient-to-b from-indigo-200 to-indigo-400">
      <div>
        <NavBar />
        <Home />
        <About />
        <h1 className="font-semibold underline">Comments</h1>
        <Comments />
      </div>
    </body>
  );
}

export default App;