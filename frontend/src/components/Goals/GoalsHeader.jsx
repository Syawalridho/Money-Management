import React from "react";
import { FiPlus } from "react-icons/fi";

/** Header bar untuk halaman goals (judul, subjudul, tombol) */
export default function GoalsHeader({ title, subtitle, onCreate }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {subtitle ? (
          <p className="text-white/70 mt-1">{subtitle}</p>
        ) : null}
      </div>

      {onCreate ? (
        <button
          onClick={onCreate}
          className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <FiPlus size={20} />
          <span>Buat Tujuan Baru</span>
        </button>
      ) : null}
    </div>
  );
}
