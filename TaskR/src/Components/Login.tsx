
import React, { useState } from 'react';
import '../Styles/Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', {
                username,
                password,
            }, {
                withCredentials: true,
            });

            if (response.data.token) {
                alert('Login successful');
                // You might want to store the token in a state or local storage for further use
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <div className={'login-container'}>
            <h2>Sign In</h2>
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
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Sign In
                </button>
                <div className="separator">or</div>
                <button type="button" className={'b2'}>
                    Continue with Google
                </button>
                <button type="button" className={'b2'}>
                    Continue with Facebook
                </button>
            </form>

            <h3>Not a member yet?  | <Link to={'/register'}>Sign Up</Link></h3>
            <h4> <a href={'./Navigation.tsx'}>Forgot Password</a></h4>
        </div>
    );
};

export default Login;
