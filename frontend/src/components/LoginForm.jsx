// src/components/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Kita akan gunakan ini nanti untuk menghubungkan ke backend

function LoginForm() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validasi sederhana di sisi klien
    if (!identifier || !password) {
      setMessage('Username/Email dan Password tidak boleh kosong.');
      setIsLoading(false);
      return;
    }

    // --- BAGIAN UNTUK MENGHUBUNGKAN KE BACKEND AKAN ADA DI SINI ---
    try {
      // Contoh: Menggunakan console.log dulu sebelum ada backend nyata
      console.log('Data yang akan dikirim:', { identifier, password });
      setMessage('Mencoba login... (Belum terhubung ke backend)');

      // Simulasi pemanggilan API (ganti dengan axios.post ke backend Anda nanti)
      // const response = await axios.post('ALAMAT_API_BACKEND_ANDA/login', {
      //   identifier,
      //   password,
      // });

      // Simulasi respons sukses
      // setMessage(response.data.message || 'Login berhasil! (Simulasi)');
      // if (response.data.token) {
      //   localStorage.setItem('authToken', response.data.token);
      // }
      // --- AKHIR BAGIAN PENGHUBUNGAN KE BACKEND ---

      // Untuk sekarang, kita tampilkan pesan simulasi saja
      // Setelah 2 detik, anggap berhasil atau gagal (untuk demonstrasi UI)
      setTimeout(() => {
        // Ganti ini dengan logika berdasarkan respons backend asli
        if (identifier === "user" && password === "pass") {
            setMessage('Login berhasil! (Simulasi Frontend)');
            // localStorage.setItem('authToken', 'dummy_token_frontend_simulation');
        } else {
            setMessage('Username/Email atau Password salah. (Simulasi Frontend)');
        }
        setIsLoading(false);
      }, 2000);


    } catch (error) {
      // --- PENANGANAN ERROR DARI BACKEND AKAN ADA DI SINI ---
      console.error('Error saat login (simulasi):', error);
      // if (error.response && error.response.data && error.response.data.message) {
      //   setMessage(error.response.data.message);
      // } else {
      //   setMessage('Terjadi kesalahan saat mencoba login.');
      // }
      // --- AKHIR PENANGANAN ERROR ---
      setMessage('Terjadi kesalahan saat mencoba login. (Simulasi Frontend)');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Masuk ke Akun Anda
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="identifier" className="sr-only">
                Username atau Email
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                autoComplete="username" // Memberikan petunjuk ke browser
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username atau Email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password-input" className="sr-only"> {/* Ganti htmlFor agar unik jika id juga 'password' */}
                Password
              </label>
              <input
                id="password-input" // Ganti id agar unik
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          {message && (
            <div
              className={`p-3 rounded-md text-sm ${
                message.includes('berhasil')
                  ? 'bg-green-100 text-green-700'
                  : message.includes('kosong')
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {message}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: solid/lock-closed (opsional) */}
                <svg
                  className={`h-5 w-5 text-indigo-500 group-hover:text-indigo-400 ${isLoading && 'animate-spin'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isLoading ? 'Memproses...' : 'Masuk'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;