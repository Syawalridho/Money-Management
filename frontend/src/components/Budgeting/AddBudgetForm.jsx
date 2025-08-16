import React, { useState } from "react";

export default function AddBudgetForm({ onAdd }) {
  const [newBudget, setNewBudget] = useState({ category: "", limit: "", spent: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBudget.category || !newBudget.limit) {
      alert("Harap isi Kategori dan Batas Anggaran.");
      return;
    }
    onAdd({
      category: newBudget.category,
      limit: parseInt(newBudget.limit),
      spent: parseInt(newBudget.spent) || 0,
    });
    setNewBudget({ category: "", limit: "", spent: "" });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Tambah Anggaran Baru</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <InputGroup label="Kategori" placeholder="cth: Belanja" value={newBudget.category} onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })} />
        <InputGroup label="Batas Anggaran" type="number" placeholder="Rp" value={newBudget.limit} onChange={(e) => setNewBudget({ ...newBudget, limit: e.target.value })} />
        <InputGroup label="Sudah Terpakai (Opsional)" type="number" placeholder="Rp" value={newBudget.spent} onChange={(e) => setNewBudget({ ...newBudget, spent: e.target.value })} />
        <button type="submit" className="bg-blue-600 px-4 py-2.5 rounded-lg hover:bg-blue-700 h-11 font-semibold text-white">
          Tambah
        </button>
      </form>
    </div>
  );
}

const InputGroup = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="text-sm text-white/70 mb-1.5">{label}</label>
    <input
      {...props}
      className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-11"
    />
  </div>
);
