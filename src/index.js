import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KiwiFacts from './pages/KiwiFacts';
import OtterFacts from './pages/OtterFacts';
import IsopodFacts from './pages/IsopodFacts';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/IsopodFacts",
    element: <IsopodFacts />
  },
  {
    path: "/OtterFacts",
    element: <OtterFacts />
  },
  {
    path: "/KiwiFacts",
    element: <KiwiFacts />
  }
])

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
