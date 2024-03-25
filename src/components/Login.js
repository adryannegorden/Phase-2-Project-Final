import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInformation, setUserInformation] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetchLoginInformation();
    }, []);

    function fetchLoginInformation() {
        fetch('http://localhost:3000/result')
            .then(res => res.json())
            .then(data => {
                setUserInformation(data);
            })
            .catch(error => {
                console.error('Error fetching login information:', error);
            });
    };

    const handleLoginEnter = (event) => {
        if (username === userInformation[0].username && password === userInformation[0].password) {
            setIsLoggedIn(true);
        } else if (username.length === 0) {
            console.log("Enter a username.");
        } else if (password.length === 0) {
            console.log("Enter a password.")
        } else {
            console.log("Incorrect username or password.")
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignOut = () => {
        setIsLoggedIn(false); // Update isLoggedIn state to false when signing out
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <NavBar isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
                    <Home isLoggedIn={isLoggedIn} />
                    <About isLoggedIn={isLoggedIn} />
                </>
            ) : (
                <div>
                    <div className="text-center font-bold">
                        <h1>Login</h1>
                    </div>
                    <div className="flex justify-center">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Username" name="uname" value={username} onChange={handleUsernameChange} required className="border border-blue-500 rounded-md p-1" />
                    </div>
                    <div className="flex justify-center">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" name="pass" value={password} onChange={handlePasswordChange} required className="border border-blue-500 rounded-md p-1" />
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleLoginEnter} disabled={!userInformation} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6">
                            Enter
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
