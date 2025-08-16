import React, { useState } from 'react';
import Sidebar from '../partial/sidebar';
import Header from '../partial/header';

// 1. Impor gambar latar belakang di sini, di level layout
import BackgroundImage from '../images/background2.png';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        // 2. Terapkan latar belakang ke div paling luar yang membungkus semuanya
        <div 
            className="flex h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/* Sidebar akan berada di atas background ini */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* Header juga akan berada di atas background ini */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Area konten utama, pastikan transparan */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    {/* Padding dipindahkan ke dalam div wrapper di dashboard.jsx agar tidak memengaruhi layout */}
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
