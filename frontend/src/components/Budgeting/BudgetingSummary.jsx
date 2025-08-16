import React from "react";

const formatRupiah = (number) => new Intl.NumberFormat('id-ID').format(number);

export default function BudgetSummary({ budgets }) {
  const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const remaining = totalLimit - totalSpent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SummaryCard title="Total Anggaran" value={formatRupiah(totalLimit)} />
      <SummaryCard title="Total Terpakai" value={formatRupiah(totalSpent)} />
      <SummaryCard title="Sisa Dana" value={formatRupiah(remaining)} isRemaining remainingValue={remaining} />
    </div>
  );
}

const SummaryCard = ({ title, value, isRemaining = false, remainingValue }) => (
  <div className="relative p-4">
    {/* Glow lembut di belakang (bukan kartu kedua) */}
    <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-white/10 blur-xl opacity-30" />

    {/* Kartu utama */}
    <div className="relative rounded-2xl border border-white/15 bg-white/10 backdrop-blur-lg p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <h3 className="text-white/70 text-sm">{title}</h3>
      <p
        className={`text-3xl font-bold mt-2 ${
          isRemaining
            ? remainingValue >= 0
              ? 'text-green-300'
              : 'text-red-300'
            : 'text-white'
        }`}
      >
        Rp{value}
      </p>
    </div>
  </div>
);


