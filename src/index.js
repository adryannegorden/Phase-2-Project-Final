import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KiwiFacts from './pages/KiwiFacts';
import OtterFacts from './pages/OtterFacts';
import IsopodFacts from './pages/IsopodFacts';
import About from './components/About';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "./Home",
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);