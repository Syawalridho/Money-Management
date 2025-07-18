// src/pages/login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // <-- Impor useAuth

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const { login } = useAuth(); // <-- Gunakan fungsi login dari context

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (!identifier || !password) {
            setMessage('Kolom input tidak boleh kosong.');
            setIsLoading(false);
            return;
        }

        try {
            const loginData = { identifier, password };
            const response = await axios.post('http://localhost:3001/api/login', loginData);

            if (response.data.success) {
                // Panggil fungsi login dari context dengan data pengguna dari API
                console.log('Data Pengguna dari API:', response.data.user); 
                login(response.data.user); 
            } else {
                setMessage(response.data.message || 'Kredensial tidak valid.');
            }
        } catch (error) {
            const errorMsg = error.response ? error.response.data.message : 'Tidak dapat terhubung ke server.';
            setMessage(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    // ... sisa kode JSX Anda tetap sama ...
    return (
        <div className='text-white h-screen flex justify-center items-center bg-gray-800 p-4'>
            <div className='bg-blue-400 bg-opacity-45 p-10 md:p-16 rounded-xl shadow-lg w-full max-w-md'>
                <h1 className='text-3xl font-bold text-center mb-6'>Login</h1>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* ... input fields ... */}
                    <input
                        className='w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'
                        type="text"
                        placeholder='Username atau Email'
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        disabled={isLoading}
                    />
                    <input
                        className='w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    {message && (
                        <p className={`text-sm p-3 rounded-md ${
                            message.includes('berhasil') || message.includes('Selamat datang') 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                        }`}>
                            {message}
                        </p>
                    )}
                    <button
                        type="submit"
                        className='w-full bg-blue-700 rounded-xl p-3 text-lg font-semibold hover:bg-blue-600 active:bg-blue-800 disabled:bg-gray-500 transition-colors'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Memproses...' : 'Login'}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm">
                    Belum punya akun?{' '}
                    <Link to="/register" className="font-medium hover:text-blue-200">
                        Daftar di sini
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;