import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import Header from '../partial/header'; 

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Hapus info user dari localStorage jika ada
        // localStorage.removeItem('user');
        console.log('Logged out');
        // Arahkan kembali ke halaman login
        navigate('/login');
    };

    return (
        <div>
          <Header />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di Dashboard!</h1>
            <p className="mb-8">Anda berhasil login.</p>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
            >
                Logout
            </button>
        </div>
        </div>
    );
}

export default Dashboard;