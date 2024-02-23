// src/Login.tsx
import React, { useState } from 'react';
import '../Components/Login.tsx'
import 'firebase/compat/auth';
import {Link} from "react-router-dom";

const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [RepeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className={'login-container'}>
            <h2>Sign Up</h2>
            <form>
                <div className={'input-container'}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={'input-container'}>
                    <label htmlFor="username">E-mail:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={'input-container'}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={'input-container'}>
                    <label htmlFor="password">Repeat Password:</label>
                    <input
                        type="password"
                        id="repeat-password"
                        value={RepeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                </div>
                <button type="button">
                    Sign Up
                </button>
                <div className="separator">or</div>
                <button type="button">
                    Sign up using Google
                </button>
                <button type="button">
                    Sign Up using Facebook
                </button>
            </form>

            <h3>Already a member?  | <Link to="/login">Sign In</Link></h3>
            <h4> <a href={'../'}>Forgot Password</a></h4>

        </div>
    );
};

export default RegisterForm;
