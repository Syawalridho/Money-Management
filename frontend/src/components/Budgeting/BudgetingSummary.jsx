import React from "react";

const formatRupiah = (number) => new Intl.NumberFormat('id-ID').format(number);

export default function BudgetSummary({ budgets }) {
  const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const remaining = totalLimit - totalSpent;
  const percentage = totalLimit > 0 ? (totalSpent / totalLimit) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SummaryCard title="Total Anggaran" value={formatRupiah(totalLimit)} />
      <SummaryCard title="Total Terpakai" value={formatRupiah(totalSpent)} />
      <SummaryCard title="Sisa Dana" value={formatRupiah(remaining)} isRemaining={true} remainingValue={remaining} />
    </div>
  );
}

const SummaryCard = ({ title, value, isRemaining = false, remainingValue }) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
    <h3 className="text-gray-400 text-sm">{title}</h3>
    <p className={`text-3xl font-bold mt-2 ${isRemaining ? (remainingValue >= 0 ? 'text-green-400' : 'text-red-400') : 'text-white'}`}>
      Rp{value}
    </p>
  </div>
);