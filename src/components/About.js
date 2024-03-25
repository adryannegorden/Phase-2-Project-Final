import React from "react"

function About({ isLoggedIn }) {
    return (
        <div style={{ display: isLoggedIn ? 'block' : 'none' }}>
            <h3 className="text-center">
                Click on a tab in the navigation bar to see some silly facts about the animal you've selected!
            </h3>
        </div>
    );
}

export default About