import React from 'react';
import BudgetStatus from './BudgetStatus'; // Mengimpor komponen yang sudah Anda punya

// Komponen placeholder untuk kartu ringkasan lainnya
const StatCard = ({ title, value, description }) => (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-full">
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800 my-2">Rp{new Intl.NumberFormat('id-ID').format(value)}</p>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

const SummaryCards = () => {
    return (
        // Grid untuk 3 kartu di dalamnya
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Kartu Placeholder 1 */}
            <StatCard 
                title="Pemasukan Bulan Ini"
                value={7850000}
                description="Total dari semua sumber"
            />
            {/* Kartu Placeholder 2 */}
             <StatCard 
                title="Pengeluaran Bulan Ini"
                value={4275000}
                description="Total dari semua kategori"
            />
            {/* Kartu Batas Anggaran Anda */}
            <div className="md:col-span-1">
                <BudgetStatus />
            </div>
        </div>
    );
};

export default SummaryCards;