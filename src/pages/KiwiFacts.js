import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function KiwiFacts() {
    const [kiwiInformation, setKiwiInformation] = useState(null);
    const [factData, setFactData] = useState("");

    useEffect(() => {
        getKiwiInformation();
    }, []);

    function getKiwiInformation() {
        fetch('http://localhost:3000/animalFact')
            .then(res => res.json())
            .then(data => {
                setKiwiInformation(data);
            })
            .catch(error => {
                console.error('Error fetching Kiwi fact information:', error);
            });
    }    

    const handleFactInputChange = (e) => {
        setFactData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/animalFact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(factData)
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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={factData}
                        onChange={handleFactInputChange}
                        className="border border-gray-400 rounded-md px-3 py-2"
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Fact
                    </button>
                </form>
            </div>
        </div>
        </body>
        </>
    )
}

export default KiwiFacts;
