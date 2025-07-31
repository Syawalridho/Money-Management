import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // <-- Kunci untuk menampilkan halaman
import Sidebar from '../partial/sidebar';
import Header from '../partial/header';
import FloatingActionButton from '../components/FloatingActionButton';
import AddRecord from '../components/AddRecord/AddRecord';

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden ...">
            {/* Semua komponen ini hanya ada di MainLayout */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-1 flex-col ...">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    {/* Di sinilah React Router akan me-render halaman spesifik Anda */}
                    {/* (Dashboard, Transactions, dll) */}
                    <Outlet />
                </main>
                <FloatingActionButton onClick={() => setIsModalOpen(true)} />
                <AddRecord isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
};

export default MainLayout;