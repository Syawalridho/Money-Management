import React from 'react';
// Pastikan semua komponen yang dibutuhkan diimpor dari 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
// Pastikan path ini benar sesuai struktur folder Anda
import Login from '../pages/login'; 
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import TransactionsPage from '../pages/transactions_page';
import ProfilePage from '../pages/profile';
import ReportPage from '../pages/report';
import BudgetingPage from '../pages/budgeting'; 
import SavingGoals from '../pages/goals';
import CalendarView from '../pages/calendar';

import Testing from '../pages/testing';
function AppRoutes() {
  // TIDAK ADA <Router> DI SINI. Langsung return <Routes>.
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

        <Route element={<MainLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/transactions" element={ <TransactionsPage />} />
          <Route path="/report" element={ <ReportPage />} />
          <Route path="/budgeting" element={ <BudgetingPage />} />
          <Route path="/goals" element={<SavingGoals />} />
          <Route path="/calendar" element={<CalendarView />} />
        </Route>

      </Routes>
  );
}

export default AppRoutes;
