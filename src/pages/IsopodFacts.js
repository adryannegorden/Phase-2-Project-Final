import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function IsopodFacts() {
    const [isopodInformation, setIsopodInformation] = useState(null);

    useEffect(() => {
        getIsopodInformation();
    }, []);

    function getIsopodInformation() {
        fetch('http://localhost:3000/animalFact')
            .then(res => res.json())
            .then(data => {
                setIsopodInformation(data);
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
                    Isopod Facts!
                </h1>
                <ul>
                    {isopodInformation && isopodInformation.isopodFacts && isopodInformation.isopodFacts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </main>
        </body>
        </>
    )
}

export default IsopodFacts;
