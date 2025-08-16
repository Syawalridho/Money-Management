import React from "react";

export default function BudgetControls({ sortOrder, setSortOrder }) {
  return (
    <div className="flex justify-end mb-4">
      <select 
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="sisa">Urutkan: Sisa Terkecil</option>
        <option value="nama">Urutkan: Nama Kategori</option>
        <option value="pengeluaran">Urutkan: % Terpakai</option>
      </select>
    </div>
  );
}