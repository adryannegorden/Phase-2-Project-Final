import React from "react";
import { NavLink } from "react-router-dom";

function KiwiFacts() {
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
                Kiwi Facts!
            </h1>
            <h2>
                <li>The little spotted Kiwi went from 5 in exisitance to around 1,200!</li>
                <li>Only about 5% of Kiwi newborns hatched in the wild survive, fun!</li>
                <li>Kiwis hatch fully feathered and completely independent!</li>
            </h2>
        </main>
        </body>
        </>
    )
}

export default KiwiFacts