import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../partial/sidebar';
import Header from '../partial/header';
import FloatingActionButton from '../components/FloatingActionButton';
import AddRecord from '../components/AddRecord/AddRecord';

// 1. Impor gambar latar belakang di layout utama ini
import BackgroundImage from '../images/background2.png'; // Pastikan path ini benar

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        // 2. Terapkan latar belakang ke div paling luar yang membungkus seluruh aplikasi
        <div 
            className="flex h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/* 3. Sidebar dan Header sekarang akan berada di atas lapisan latar belakang.
                 Pastikan kedua komponen ini memiliki background transparan/kaca.
                 (sidebar.jsx Anda sudah benar).
            */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                {/* 4. Area <main> sekarang hanya sebagai wadah untuk konten halaman.
                     <Outlet /> akan merender halaman spesifik (Dashboard, Testing, dll.) di sini.
                */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <Outlet />
                </main>
                
                <FloatingActionButton onClick={() => setIsModalOpen(true)} />
                <AddRecord isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
};

export default MainLayout;
