import React from 'react';

// Impor komponen
import GlassCard from '../components/ui/GlassCard';
import IncomeExpense from '../components/Dashboard/IncomeExpense';
import SpendingCategory from '../components/Dashboard/SpendingCategory';
import SummaryCards from '../components/Dashboard/SummaryCards'; 
import Transactions from '../components/Dashboard/Transactions';  

// Latar belakang tidak lagi diimpor atau digunakan di sini.
// MainLayout.jsx sudah menanganinya.

const Dashboard = () => {
    const mainBalance = 5320300; 

    // PERBAIKAN:
    // Semua div pembungkus yang mengatur layout (seperti flex, h-screen, overflow)
    // telah dihapus. Komponen ini sekarang hanya mengembalikan kontennya saja.
    // MainLayout akan menempatkan ini di dalam <main> yang sudah bisa di-scroll.
    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mb-6">
                <GlassCard title="Saldo Utama">
                <p className="text-4xl font-bold text-white">
                    Rp{new Intl.NumberFormat('id-ID').format(mainBalance)}
                </p>
                </GlassCard>
            </div>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                
                <div className="lg:col-span-2">
                    <GlassCard title="Pemasukan vs Pengeluaran">
                        <IncomeExpense />
                    </GlassCard>
                </div>
                
                <div className="lg:col-span-1">
                    <GlassCard title="Pengeluaran per Kategori">
                        <SpendingCategory />
                    </GlassCard>
                </div>

                <div className="lg:col-span-3">
                    <GlassCard title="Ringkasan Bulan Ini">
                        <SummaryCards />
                    </GlassCard>
                </div>
                
                <div className="lg:col-span-3">
                    <GlassCard title="Transaksi Terakhir">
                        <Transactions />
                    </GlassCard>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
