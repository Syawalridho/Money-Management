// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Impor komponen halaman Anda
// Sesuaikan path jika Anda meletakkannya di folder berbeda, misal './pages/Login'
import Login from '../pages/login'; 
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';

function AppRoutes() {
  // Komponen <Router> sudah dihapus dari sini. Langsung return <Routes>.
  return (
      <Routes>
        {/* Rute default akan mengarahkan ke /login */}
        <Route path="/" element={<Navigate to="/login" />} />      
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rute untuk dashboard setelah login */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default AppRoutes;
