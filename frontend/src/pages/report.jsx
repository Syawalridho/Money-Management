import React, { useState } from 'react';

// Impor komponen layout Anda
import Sidebar from '../partial/sidebar';
import Header from '../partial/header';

// Impor ikon (pastikan Anda sudah menginstal react-icons)
// npm install react-icons
import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiPercent, FiCalendar } from 'react-icons/fi';

// Impor komponen chart yang sudah ada (asumsi path-nya benar)
import IncomeExpense from '../components/Dashboard/IncomeExpense';
import SpendingCategory from '../components/Dashboard/SpendingCategory';

// --- Helper & Komponen Kecil ---

// Fungsi untuk format Rupiah
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};

// Komponen Kartu Statistik
const StatCard = ({ icon, title, value, trend, iconBgColor }) => (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{value}</p>
            </div>
            <div className={`p-2 rounded-lg ${iconBgColor}`}>
                {icon}
            </div>
        </div>
        <p className={`mt-2 text-xs flex items-center gap-1 ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {trend.startsWith('+') ? <FiTrendingUp/> : <FiTrendingDown/>}
            {trend} vs bulan lalu
        </p>
    </div>
);

// Komponen Placeholder untuk chart & tabel lainnya
const MonthlyRevenueChart = () => (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm h-96 flex items-center justify-center text-gray-400">
        Grafik Pemasukan Bulanan
    </div>
);

const TopExpensesTable = () => (
     <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm h-96 flex items-center justify-center text-gray-400">
        Tabel Pengeluaran Teratas
    </div>
);


// --- Komponen Halaman Laporan Utama ---

const ReportPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [reportType, setReportType] = useState('monthly'); // 'monthly' atau 'yearly'

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
                        
                        {/* --- Baris Filter --- */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                            {/* Tombol Monthly / Yearly */}
                            <div>
                                <div className="relative flex bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
                                    <button 
                                        onClick={() => setReportType('monthly')}
                                        className={`relative w-24 py-1.5 text-sm font-semibold transition-colors ${reportType === 'monthly' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
                                    >
                                        Bulanan
                                    </button>
                                    <button 
                                        onClick={() => setReportType('yearly')}
                                        className={`relative w-24 py-1.5 text-sm font-semibold transition-colors ${reportType === 'yearly' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
                                    >
                                        Tahunan
                                    </button>
                                    {/* Latar belakang slider */}
                                    <div className={`absolute top-1 h-8 w-24 rounded-md bg-white dark:bg-gray-800 shadow-sm transition-transform duration-300 ${reportType === 'yearly' ? 'translate-x-full' : ''}`}></div>
                                </div>
                            </div>

                            {/* Pilihan Tanggal */}
                            <div className="relative">
                                <input 
                                    type="month" 
                                    defaultValue="2024-01"
                                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>

                        {/* --- Grid Utama --- */}
                        <div className="space-y-6">
                            {/* 4 Kartu Statistik */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                <StatCard 
                                    title="Total Pemasukan"
                                    value={formatRupiah(45320000)}
                                    trend="+5.4%"
                                    icon={<FiTrendingUp size={20} className="text-green-600"/>}
                                    iconBgColor="bg-green-100 dark:bg-green-500/10"
                                />
                                <StatCard 
                                    title="Total Pengeluaran"
                                    value={formatRupiah(32150000)}
                                    trend="-2.1%"
                                    icon={<FiTrendingDown size={20} className="text-red-600"/>}
                                    iconBgColor="bg-red-100 dark:bg-red-500/10"
                                />
                                <StatCard 
                                    title="Sisa Dana"
                                    value={formatRupiah(13170000)}
                                    trend="+15.8%"
                                    icon={<FiDollarSign size={20} className="text-blue-600"/>}
                                    iconBgColor="bg-blue-100 dark:bg-blue-500/10"
                                />
                                <StatCard 
                                    title="Rasio Tabungan"
                                    value="29.1%"
                                    trend="+3.2%"
                                    icon={<FiPercent size={20} className="text-indigo-600"/>}
                                    iconBgColor="bg-indigo-100 dark:bg-indigo-500/10"
                                />
                            </div>

                            {/* Grafik Pemasukan vs Pengeluaran & Kategori */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <IncomeExpense />
                                </div>
                                <div>
                                    <SpendingCategory />
                                </div>
                            </div>

                            {/* Grafik Pemasukan Bulanan & Tabel Pengeluaran */}
                             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <MonthlyRevenueChart />
                                </div>
                                <div>
                                    <TopExpensesTable />
                                </div>
                            </div>
                            
                            {/* Tombol Aksi di Bawah */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Terakhir diperbarui: Hari ini, 14:30
                                </p>
                                <div className="flex items-center gap-3">
                                    <button className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                                        Download Laporan PDF
                                    </button>
                                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                                        Export Semua Grafik
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ReportPage;