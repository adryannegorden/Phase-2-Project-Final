import React from "react";
import { NavLink } from "react-router-dom";

function OtterFacts() {
    return(
        <>
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
                <li>They slide on their stomach</li>
                <li>They are very joyus</li>
                <li>They are cute</li>
            </h2>
        </main>
        </>
    )
}

export default OtterFacts