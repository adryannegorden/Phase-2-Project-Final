import React from "react";
import "./Home.css";

function Home({ isLoggedIn }) {
    return (
        <div style={{ display: isLoggedIn ? 'block' : 'none' }}>
            <h1 className="text-center font-bold">Welcome to Animal Facts</h1>
        </div>
    );
}

export default Home;