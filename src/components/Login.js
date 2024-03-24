import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.log('Username:', event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log('Password:', event.target.value);
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
        </>
    );
}

export default Login;
