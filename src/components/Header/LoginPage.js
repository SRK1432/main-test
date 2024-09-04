import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = ({ setIsLoggedIn }) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginHandler = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSPsPY8okqsmk6JmvKt9h5riF5VRQN9x0`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error.message || 'Failed to authenticate.');
            }

            setIsLoggedIn(true);
            setEnteredEmail('');
            setEnteredPassword('');
            navigate('/');  

        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    return (
        <div className="full-body">
            <h2 className="heading-style">User Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={loginHandler}>
                <label htmlFor="email">Email:</label>
                <input
                    className="input-box"
                    type="email"
                    value={enteredEmail}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    className="input-box"
                    type="password"
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    required
                />
                <button className="login-button" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
