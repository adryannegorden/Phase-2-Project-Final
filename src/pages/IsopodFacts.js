import React from "react";
import { NavLink } from "react-router-dom";

function IsopodFacts() {
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
                Isopod Facts!
            </h1>
            <h2>
                <li>Isopods can come in a wide variety of colors!</li>
                <li>The Giant Isopod is a crustacean, NOT a bug!</li>
                <li>Some isopod species are able to regrow limbs!</li>
            </h2>
        </main>
        </body>
        </>
    )
}

export default IsopodFacts