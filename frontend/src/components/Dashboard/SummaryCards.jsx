import React from 'react';
import BudgetStatus from './BudgetStatus';

const StatCard = ({ title, value, description }) => (
  <div className="h-full">
    <p className="text-gray-400">{title}</p>
    <p className="text-2xl font-bold text-white my-2">Rp{new Intl.NumberFormat('id-ID').format(Math.round(value || 0))}</p>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default function SummaryCards({ incomeThisMonth = 0, expenseThisMonth = 0 }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      <StatCard
        title="Pemasukan Bulan Ini"
        value={incomeThisMonth}
        description="Total dari semua sumber"
      />
      <StatCard
        title="Pengeluaran Bulan Ini"
        value={expenseThisMonth}
        description="Total dari semua kategori"
      />
      <div className="md:col-span-1">
        {/* Sementara BudgetStatus masih statis; tinggal diganti saat endpoint budget siap */}
        <BudgetStatus />
      </div>
    </div>
  );
}
