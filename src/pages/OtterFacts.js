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
        </main>
        </>
    )
}

export default OtterFacts