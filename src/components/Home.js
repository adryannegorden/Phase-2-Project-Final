import React from "react";
import "./Home.css";

function Home({ isLoggedIn }) {
    return (
        <div style={{ display: isLoggedIn ? 'block' : 'none' }}>
            <h1 className="text-center font-bold">Home!</h1>
        </div>
    );
}

export default Home;