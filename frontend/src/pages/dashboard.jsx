import React, { useState } from 'react';

// Impor komponen layout
import Sidebar from '../partial/sidebar';
import Header from '../partial/header';

// Impor semua komponen kartu dashboard yang akan digunakan
import IncomeExpense from '../components/Dashboard/IncomeExpense';
import SpendingCategory from '../components/Dashboard/SpendingCategory';
import SummaryCards from '../components/Dashboard/SummaryCards'; // Komponen baru
import Transactions from '../components/Dashboard/Transactions';   // Komponen yang dirombak

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Data simulasi untuk Saldo Utama
    const mainBalance = 5320300; 

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            {/* Area Konten */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* Header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        {/* Kartu Saldo Utama Tetap di Atas */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
                            <p className="text-lg font-medium text-gray-600">Saldo Utama</p>
                            <p className="text-4xl font-bold text-gray-900 mt-2">
                                Rp{new Intl.NumberFormat('id-ID').format(mainBalance)}
                            </p>
                        </div>
                        
                        {/* STRUKTUR GRID BARU (3 KOLOM) */}
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            
                            {/* --- BARIS 1 --- */}
                            <div className="lg:col-span-2">
                                <IncomeExpense />
                            </div>
                            <div className="lg:col-span-1">
                                <SpendingCategory />
                            </div>

                            {/* --- BARIS 2 --- */}
                            <div className="lg:col-span-3">
                                <SummaryCards />
                            </div>
                            
                            {/* --- BARIS 3 --- */}
                            <div className="lg:col-span-3">
                                <Transactions />
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;