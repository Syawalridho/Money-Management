import React from 'react';
import BudgetStatus from './BudgetStatus';

const StatCard = ({ title, value, description }) => (
    <div className="h-full">
        <p className="text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-white my-2">Rp{new Intl.NumberFormat('id-ID').format(value)}</p>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

const SummaryCards = () => {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
            <StatCard 
                title="Pemasukan Bulan Ini"
                value={7850000}
                description="Total dari semua sumber"
            />
             <StatCard 
                title="Pengeluaran Bulan Ini"
                value={4275000}
                description="Total dari semua kategori"
            />
            <div className="md:col-span-1">
                <BudgetStatus />
            </div>
        </div>
    );
};

export default SummaryCards;
