// file: src/layout/DashboardLayout.js

import React from 'react';
import Sidebar from '../partial/sidebar'; // Komponen menu samping
import Header from '../partial/header';   // Komponen header/navbar atas

// Perhatikan '{ children }' di sini. Ini adalah properti dari React.
const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* 1. Sidebar yang selalu tampil */}
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* 2. Header yang selalu tampil */}
                <Header />

                {/* 3. Area Konten Utama */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    {/* Di sinilah konten dari halaman Anda (TransactionsPage) akan ditampilkan */}
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;