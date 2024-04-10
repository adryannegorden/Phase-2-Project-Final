import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function KiwiFacts() {
    const [kiwiInformation, setKiwiInformation] = useState(null);

    useEffect(() => {
        getKiwiInformation();
    }, []);

    function handleInputChange(event) {
        event.preventDefault();
        console.log("works")
    }

    function getKiwiInformation() {
        fetch('http://localhost:3000/animalFact')
            .then(res => res.json())
            .then(data => {
                setKiwiInformation(data);
            })
            .catch(error => {
                console.log('Error fetching Kiwi fact information:', error);
            });
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
                Kiwi Facts!
            </h1>
            <ul>
                {kiwiInformation && kiwiInformation.kiwiFacts && kiwiInformation.kiwiFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>

        </main>
        <div className="flex justify-center">
            <div className="text-center">
                <p className="font-semibold">Please add more Kiwi Facts!</p>
                <form>
                    <input className="flex justify-center border-blue-800 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-500"/>
                    <button onClick={handleInputChange} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </body>
        </>
    )
}

export default KiwiFacts;
