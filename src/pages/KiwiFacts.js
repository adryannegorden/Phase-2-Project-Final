import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function KiwiFacts() {
    useEffect(() => {
        getKiwiInformation();
    }, []);

    const [kiwiInformation, setKiwiInformation] = useState(null)
    function getKiwiInformation() {
        fetch('http://localhost:3000/animalFact')
            .then(res => res.json())
            .then(data => {
                setKiwiInformation(data);
            })
            .catch(error => {
                console.log('Error fetching Kiwi fact information:', error);
            })
    }

    function handleInputChange(event) {
        setNewFact(event.target.value);
    }

    function handleSubmit() {
        fetch('http://localhost:3000/animalFact/kiwiFacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fact: newFact })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Testing added:', data);
        })
        .catch(error => {
            console.error('Couldnt add fact:', error);
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
                {kiwiInformation && kiwiInformation.kiwiFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </main>
        <div className="flex justify-center">
            <div className="text-center">
                <p className="font-semibold">Please add more Kiwi Facts!</p>
                <input 
                    type="text" 
                    className="flex justify-center border-blue-800 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2">
                    Submit
                </button>
            </div>
        </div>
        </body>
        </>
    )
}

export default KiwiFacts