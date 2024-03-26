import React, { useState } from "react";
import "./NavBar.css";
import Confirmation from "./Confirmation";
import { NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, onSignOut }) {
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const handleSignOut = () => {
        setIsConfirmationOpen(true);
    }

    const handleConfirm = () => {
        onSignOut();
        setIsConfirmationOpen(false);
    }

    const handleCancel = () => {
        setIsConfirmationOpen(false);
    }

    return (
        <div className="w-full flex justify-center items-center" id="navbar">
            <div className="flex justify-center">
                <NavLink to="/kiwifacts" className="nav-link bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6">
                    Kiwi Facts
                </NavLink>
                <NavLink to="/isopodfacts" className="nav-link  bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6">
                    Isopod Facts
                </NavLink>
                <NavLink to="/otterfacts" className="nav-link  bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6">
                    Otter Facts
                </NavLink>
                <button onClick={handleSignOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1">
                    Sign Out
                </button>
            </div>
            <Confirmation isOpen={isConfirmationOpen} onConfirm={handleConfirm} onCancel={handleCancel} />
        </div>
    );
}

export default NavBar;
