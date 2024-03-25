import React from "react"

function About({ isLoggedIn }) {
    return (
        <div style={{ display: isLoggedIn ? 'block' : 'none' }}>
            <h3 className="text-center">
                This is the about section of my stupid website
            </h3>
        </div>
    );
}

export default About