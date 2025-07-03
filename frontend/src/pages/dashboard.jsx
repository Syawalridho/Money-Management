import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// Impor komponen layout
import Sidebar from '../partial/sidebar';
import Header from '../partial/header';

// Impor komponen kartu dashboard
import IncomeExpense from '../components/Dashboard/IncomeExpense';
import Transactions from '../components/Dashboard/Transactions';
import SpendingCategory from '../components/Dashboard/SpendingCategory';
import BudgetStatus from '../components/Dashboard/BudgetStatus';


// --- Komponen Halaman Dashboard Utama ---
const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Hapus info user dari localStorage jika ada
        // localStorage.removeItem('user');
        console.log('Logged out');
        // Arahkan kembali ke halaman login
        navigate('/login');
    };

    // Data simulasi untuk Saldo Utama
    const mainBalance = 5320300; 

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            {/* Area Konten */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* Header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <main>
                    <div className="mx-3 max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        
                        {/* Kartu Saldo Utama */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
                            <p className="text-lg font-medium text-gray-600">Saldo Utama</p>
                            <p className="text-4xl font-bold text-gray-900 mt-2">
                                Rp{new Intl.NumberFormat('id-ID').format(mainBalance)}
                                <span className="text-2xl text-gray-400 font-normal">,00</span>
                            </p>
                        </div>
                        
                        {/* Grid Utama untuk menata kartu-kartu */}
                        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
                            
                            {/* Kolom Kiri (Besar) */}
                            <div className="space-y-6 xl:col-span-3">
                                <IncomeExpense />
                                <Transactions />
                            </div>

                            {/* Kolom Kanan (Kecil) */}
                            <div className="space-y-6 xl:col-span-2">
                                <SpendingCategory />
                                <BudgetStatus />
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
