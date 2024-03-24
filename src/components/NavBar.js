import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <div style={{display: 'none' }} className="w-full flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                page1
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                page2
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                page3
            </button>
        </div>
    )
}

export default NavBar