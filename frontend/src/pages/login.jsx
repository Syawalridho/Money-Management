import React, { useState } from 'react'
import fon from "../images/fon.jpg"
import axios from 'axios'

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah reload halaman standar
        setIsLoading(true);
        setMessage('');

        if (!identifier || !password) {
            setMessage('Kolom input tidak boleh kosong.');
            setIsLoading(false);
            return;
        }

        try {
            const loginData = {
                identifier: identifier,
                password: password
            };
        
            const response = await axios.post('http://localhost:3001/login', loginData);
         
            setMessage(response.data.message || 'Login berhasil!');

            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                console.log('Token disimpan:', response.data.token);
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || 'Terjadi kesalahan. Coba lagi.');
            } else if (error.request) {
                setMessage('Tidak dapat terhubung ke server. Periksa koneksi Anda.');
            } else {
                setMessage('Terjadi kesalahan. Silakan coba lagi.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return ( 
        <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-no-repeat m-0 '>
            <div className='flex-row bg-blue-400 bg-opacity-45 p-20 m-20  rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl'>
                <h1 className='p-2 text-center pb-8 font-sans text-xl'>Login</h1>
                <form onSubmit={handleSubmit} className='grid grid-row-3 gap-4'>
                    <input 
                        className='p-2 focus:outline-none bg-white text-gray-700' 
                        type="text" 
                        placeholder='Username atau Email' 
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        disabled={isLoading} 
                    />
                    <input
                        className='p-2 focus:outline-none bg-white text-gray-700 rounded'
                        type="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    {message && (
                        <p className={`text-sm p-2 rounded ${message.includes('berhasil') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {message}
                        </p>
                    )}
                    <button
                        type="submit" // Tambahkan type="submit"
                        className='bg-blue-800 rounded-xl p-2 hover:bg-blue-500 hover:text-orange-50 disabled:bg-gray-500'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Memproses...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login