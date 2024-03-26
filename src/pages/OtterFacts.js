import React from "react";
import { NavLink } from "react-router-dom";

function OtterFacts() {
    return(
        <div>
            <NavLink to="/" className="nav-link bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6">
                Home
            </NavLink>
            ...Otter Facts...
        </div>
    )
}

export default OtterFacts