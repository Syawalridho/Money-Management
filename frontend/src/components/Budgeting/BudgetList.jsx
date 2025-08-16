import React from "react";
import { FiTrash2 } from "react-icons/fi";

const formatRupiah = (number) => new Intl.NumberFormat('id-ID').format(number);

export default function BudgetList({ budgets, onDelete }) {
  const getBarColor = (percentage) => {
    if (percentage > 100) return "bg-red-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-4">
      {budgets.map((b, idx) => {
        const percentage = (b.limit > 0) ? (b.spent / b.limit) * 100 : 0;
        const barColor = getBarColor(percentage);
        const remaining = b.limit - b.spent;

        return (
          <div key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">{b.category}</span>
              <button 
                onClick={() => onDelete(b.category)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <FiTrash2 />
              </button>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Terpakai: <span className="font-medium text-white">Rp{formatRupiah(b.spent)}</span></span>
              <span className="text-gray-400">Batas: Rp{formatRupiah(b.limit)}</span>
            </div>
            <div className="w-full bg-gray-700 h-2.5 rounded-full">
              <div
                className={`${barColor} h-2.5 rounded-full`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              ></div>
            </div>
            <p className={`text-xs mt-1.5 ${remaining < 0 ? 'text-red-400' : 'text-green-400'}`}>
              {remaining >= 0 ? `Sisa Rp${formatRupiah(remaining)}` : `Lebih Rp${formatRupiah(Math.abs(remaining))}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}