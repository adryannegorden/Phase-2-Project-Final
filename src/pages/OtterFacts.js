import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function OtterFacts() {
    const [otterInformation, setOtterInformation] = useState(null);

    useEffect(() => {
        getOtterInformation();
    }, []);

    function getOtterInformation() {
        fetch('http://localhost:3000/animalFact')
            .then(res => res.json())
            .then(data => {
                setOtterInformation(data);
            })
    }    

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
                <ul>
                    {otterInformation && otterInformation.otterFacts && otterInformation.otterFacts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </main>
        </body>
        </>
    )
}

export default OtterFacts;
