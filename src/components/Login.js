import React, { useState, useEffect } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInformation, setUserInformation] = useState(null);

    useEffect(() => {
        fetchLoginInformation();
    }, []);

    function fetchLoginInformation() {
        fetch('http://localhost:3000/result')
        .then(res => res.json())
        .then(data => {
            setUserInformation(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching login information:', error);
        });
    };

    const handleLoginEnter = (event) => {
        if (userInformation.results == username && userInformation.password == password) {
            console.log("Login Successful");
        } else {
            console.log("Invalid username or password");
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return( 
        <>
            <div className="text-center font-bold">
                <h1>Login</h1>
            </div>
            <div className="flex justify-center">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Username" name="uname" value={username} onChange={handleUsernameChange} required className="border border-blue-500 rounded-md p-1"/>
            </div>
            <div className="flex justify-center">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" name="pass" value={password} onChange={handlePasswordChange} required className="border border-blue-500 rounded-md p-1"/>
            </div>
            <div className="flex justify-center">
                <button onClick={handleLoginEnter} className="border border-blue-500 rounded-md p-2">
                    Enter
                </button>
            </div>
        </>
    );
}

export default Login;
