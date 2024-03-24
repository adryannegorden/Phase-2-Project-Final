import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginEnter = (event) => {
        console.log("Entered Username:", username);
        console.log("Entered Password:", password);
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
                <label htmlFor="username"></label>
                <input type="text" id="username" placeholder="Username" name="uname" value={username} onChange={handleUsernameChange} required className="border border-blue-500 rounded-md p-1"/>
            </div>
            <div className="flex justify-center">
                <label htmlFor="password"></label>
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
