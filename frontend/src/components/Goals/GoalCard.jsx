import React from "react";

/** Util kecil—boleh dipindah ke utils/money.js kalau mau dipakai global */
export const formatRupiah = (number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);

/** Kartu konten untuk 1 goal (tanpa wrapper kaca) */
export default function GoalCard({ goal, onAction }) {
  const percentage = Math.min(100, (goal.current / goal.target) * 100);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${goal.color}`}
            aria-hidden
          >
            {goal.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">{goal.name}</h3>
            <p className="text-sm text-white/70">
              Estimasi Selesai: {goal.estimate}
            </p>
          </div>
        </div>

        {onAction ? (
          <button
            onClick={onAction}
            className="p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/15"
            aria-label={`Aksi untuk ${goal.name}`}
          >
            {/* Placeholder ikon naik/trend – biarkan konsumennya yang menentukan */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 17l6-6 4 4 7-7" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        ) : null}
      </div>

      <div>
        <div className="flex justify-between items-end mb-1">
          <p className="text-green-300 font-semibold">
            {formatRupiah(goal.current)}
          </p>
          <p className="text-sm text-white/70">
            Target: {formatRupiah(goal.target)}
          </p>
        </div>

        <div className="w-full bg-white/10 h-3 rounded-full" role="progressbar"
             aria-valuenow={Math.round(percentage)} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="text-right text-sm font-medium text-white/80 mt-1">
          {percentage.toFixed(0)}%
        </p>
      </div>
    </div>
  );
}
