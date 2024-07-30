import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log('user', user)

    useEffect(() => {
        try {
            const auth = localStorage.getItem('token');
            if (auth) {
                setUser(JSON.parse(auth));
            }
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }, []);

    const login = (userData) => {
        console.log('Login', userData)
        localStorage.setItem('token', JSON.stringify(userData));
        console.log(userData);
        setUser(userData);
        console.log('user', user);
    };

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

export const useAuth = () => {
    return useContext(AuthContext);
};
