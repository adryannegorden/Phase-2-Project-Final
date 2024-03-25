import React, { useState } from "react";
import "./NavBar.css";
import Confirmation from "./Confirmation";

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
            <div style={{ display: isLoggedIn ? 'block' : 'none' }} className="flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                    Dog Picture
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                    Cat Picture
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                    page3
                </button>
                <button onClick={handleSignOut} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                    Sign Out
                </button>
            </div>
            <Confirmation isOpen={isConfirmationOpen} onConfirm={handleConfirm} onCancel={handleCancel} />
        </div>
    );
}

export default NavBar;
