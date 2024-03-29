import React from "react";
import { NavLink } from "react-router-dom";

function OtterFacts() {
    return(
        <>
         <body className="h-screen bg-gradient-to-b from-indigo-200 to-indigo-400">
        <header>
            <NavLink to="/App" className="nav-link bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6">
                Home
            </NavLink>
        </header>
        <main className="text-center">
            <h1 className="font-bold text-6xl">
                Otter Facts!
            </h1>
            <h2>
                <li>Otters will hold hands while sleeping, this is so they don't dift apart!</li>
                <li>Sea Otters eat about 25% of their body weight in food each day!</li>
                <li>On average, they can hold their breath for 5-8 minutes at a time!</li>
            </h2>
        </main>
        </body>
        </>
    )
}

export default OtterFacts