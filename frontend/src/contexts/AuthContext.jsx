// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Membuat Context
const AuthContext = createContext(null);

// 2. Membuat Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Cek localStorage saat komponen pertama kali dimuat
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Fungsi untuk handle login
    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        navigate('/dashboard'); // Arahkan ke dashboard setelah login
    };

    // Fungsi untuk handle logout
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login'); // Arahkan ke halaman login setelah logout
    };

    const value = { user, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 3. Membuat Custom Hook untuk mempermudah penggunaan context
export const useAuth = () => {
    return useContext(AuthContext);
};