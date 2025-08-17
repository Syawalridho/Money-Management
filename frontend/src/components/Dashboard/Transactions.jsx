import React from 'react';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

const fmtDate = (iso) => {
  const d = new Date(iso);
  const tanggal = d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').reverse().join('-'); // YYYY-MM-DD
  const jam = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  return { date: tanggal, time: jam };
};

export default function Transactions({ items = [], loading }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 -mt-2">
        <div />
        <a href="transactions" className="font-medium text-blue-400 hover:text-blue-300 text-sm">
          Lihat Semua
        </a>
      </div>

      <div className="space-y-2">
        {items.map((tx, idx) => {
          const { date, time } = fmtDate(tx.occurred_at);
          const isIncome = tx.type === 'income';
          const amount = Number(tx.amount || 0);

          // >>> label sebagai deskripsi utama (setelah tanggal)
          const desc =
            (typeof tx.label === 'string' && tx.label.trim().length > 0 && tx.label.trim()) ||
            tx.category ||
            (isIncome ? 'Pemasukan' : 'Pengeluaran');

          const categoryText = tx.category || '—';

          return (
            <div key={tx.id ?? idx} className="grid grid-cols-10 gap-4 p-3 rounded-lg hover:bg-white/10">
              {/* Tanggal */}
              <div className="col-span-2 text-sm">
                <p className="font-medium text-gray-100">{date}</p>
                <p className="text-gray-300">{time}</p>
              </div>

              {/* Label / Deskripsi (setelah tanggal) */}
              <div className="col-span-4 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isIncome ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {isIncome ? <FiArrowUpRight size={20} /> : <FiArrowDownLeft size={20} />}
                </div>
                <p className="font-semibold text-white break-words">{desc}</p>
              </div>

              {/* Kolom kategori (tetap di kolom kanan-tengah) */}
              <div className="col-span-2 flex items-center">
                <p className="text-sm text-gray-200">{categoryText}</p>
              </div>

              {/* Amount */}
              <div className="col-span-2 flex items-center justify-end">
                <p className={`font-semibold text-base ${isIncome ? 'text-green-400' : 'text-red-400'}`}>
                  {isIncome ? '+' : '-'}Rp{new Intl.NumberFormat('id-ID').format(Math.abs(amount))}
                </p>
              </div>
            </div>
          );
        })}

        {!items.length && !loading && (
          <p className="text-center text-gray-400">Belum ada transaksi.</p>
        )}
      </div>
    </div>
  );
}
