import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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

    //Setting setIsLoggedIn(true) is asynchronous so this part makes it so the navigation happens after isLoggedIn is true
    //Basically, updates the isLoggedIn state and navigates once it's true
    useEffect(() => {
        if (isLoggedIn) {
            window.location.href = "/App";
        }
    }, [isLoggedIn]);

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

    return (
        <>
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
                    <NavLink to={isLoggedIn ? "/App" : "#"} className="nav-link bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6" onClick={isLoggedIn ? null : handleLoginEnter}>
                        Enter
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Login;
