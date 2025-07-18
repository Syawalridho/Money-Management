import React from 'react';
// Pastikan semua komponen yang dibutuhkan diimpor dari 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom';

// Impor semua komponen halaman Anda
// Pastikan path ini benar sesuai struktur folder Anda
import Login from '../pages/login'; 
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import TransactionsPage from '../pages/transactions_page';
import ProfilePage from '../pages/profile';
import ReportPage from '../pages/report';

function AppRoutes() {
  // TIDAK ADA <Router> DI SINI. Langsung return <Routes>.
  return (
      <Routes>
        {/* Rute default akan otomatis mengarahkan ke halaman login */}
        <Route path="/" element={<Navigate to="/login" />} />      
        
        {/* Rute untuk setiap halaman */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={ <Dashboard />} />
        <Route path="/transactions" element={ <TransactionsPage />} />
        <Route path="/report" element={ <ReportPage />} />
      </Routes>
  );
}

export default AppRoutes;
