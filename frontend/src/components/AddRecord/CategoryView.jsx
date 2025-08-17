// CategoryView.jsx
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

export const INCOME_CATEGORIES = [
  'Gaji', 'Bonus', 'Tunjangan', 'Freelance', 'Dividen Saham', 'Bunga Bank',
  'Hadiah', 'Penjualan Aset', 'Pengembalian Dana', 'Lainnya (Pemasukan)',
];

export const EXPENSE_CATEGORIES = [
  'Makanan & Minuman', 'Transportasi', 'Belanja', 'Tagihan', 'Kesehatan',
  'Hiburan', 'Pendidikan', 'Investasi', 'Donasi', 'Lainnya (Pengeluaran)',
];

export default function CategoryView({ onBack, onSelectCategory, type = 'expense' }) {
  const items = type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  return (
    <div className="divide-y divide-white/10">
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="text-gray-400 hover:text-white">Kembali</button>
        <h4 className="text-white font-semibold">Pilih Kategori</h4>
        <div />
      </div>

      <ul className="max-h-[340px] overflow-y-auto">
        {items.map((name) => (
          <li key={name}>
            <button
              onClick={() => onSelectCategory(name)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/10"
            >
              <span className="text-gray-200">{name}</span>
              <FiChevronRight className="text-gray-400" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
