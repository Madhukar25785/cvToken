
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log('user', user)

    useEffect(() => {
        const authToken = localStorage.getItem('token');

        if (authToken) {
            setUser(authToken);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setUser(token);
    };
    // console.log('Login', login)

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
