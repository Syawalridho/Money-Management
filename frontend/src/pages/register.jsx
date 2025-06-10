// src/pages/register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); // Tambahkan state untuk email
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (!username || !email || !password) {
            setMessage('Semua kolom wajib diisi.');
            setIsLoading(false);
            return;
        }

        try {
            // URL disesuaikan ke port 3001 dan path /api/register
            const response = await axios.post('http://localhost:3001/api/register', {
                username,
                email, // Kirim juga email
                password
            });
            
            if (response.data.success) {
                // Tampilkan pesan sukses, lalu arahkan ke login setelah beberapa saat
                setMessage('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // Tunggu 2 detik
            } else {
                 setMessage(response.data.message || 'Registrasi gagal.');
            }
        } catch (error) {
            const errorMsg = error.response ? error.response.data.message : 'Tidak dapat terhubung ke server.';
            setMessage(errorMsg);
            console.error('Registrasi error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
            <div className="bg-blue-300 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Buat Akun Baru</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        className='w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={isLoading}
                    />
                    <input
                        className='w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="email" // Tipe email untuk validasi browser
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <input
                        className='w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    {message && <p className={`mt-4 text-center text-sm p-3 rounded-md ${
                        message.toLowerCase().includes('berhasil') 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                    }`}>{message}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 disabled:bg-gray-400" disabled={isLoading}>
                        {isLoading ? 'Mendaftarkan...' : 'Register'}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Sudah punya akun?{' '}
                    <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                        Login di sini
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
