import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function LabelView({ onClose, formData, setFormData }) {
  const [label, setLabel] = useState(formData?.label || "");

  const handleSave = () => {
    setFormData((prev) => ({ ...prev, label: label.trim() }));
    onClose();
  };

  return (
    <div className="text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <FiX size={20} />
        </button>
        <h3 className="font-semibold">Tambah Label</h3>
        <button
          onClick={handleSave}
          className="font-semibold text-blue-400 hover:text-blue-300"
        >
          Simpan
        </button>
      </div>

      {/* Input */}
      <div className="p-4">
        <label className="block text-sm text-gray-300 mb-2">
          Masukkan Label / Deskripsi
        </label>
        <input
          autoFocus
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Contoh: Burger & Kentang"
          className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 outline-none"
        />
      </div>
    </div>
  );
}
