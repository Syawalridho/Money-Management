import React, { useEffect, useState } from "react";
import {
  FiX,
  FiChevronRight,
  FiCalendar,
  FiTag,
  FiCreditCard,
  FiHelpCircle,
} from "react-icons/fi";

const ListItem = ({ icon, label, value, required, onClick = () => {} }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10"
  >
    <div className="flex items-center gap-4">
      <div className="text-gray-400">{icon}</div>
      <span className="text-gray-100">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className={required ? "text-red-400" : "text-gray-300"}>{value}</span>
      <FiChevronRight className="text-gray-500" />
    </div>
  </button>
);

export default function MainView({
  recordType, setRecordType, bgColorClass,
  onClose, formData, setFormData, onNavigate, onSave,
}) {
  const [amount, setAmount] = useState(formData.amount);
  const handleAmountChange = (e) =>
    setAmount(String(e.target.value).replace(/[^\d]/g, ""));

  useEffect(() => { setFormData((s) => ({ ...s, amount })); }, [amount, setFormData]);

  const formattedAmount = new Intl.NumberFormat("id-ID").format(Number(amount || 0));
  const isIncome = recordType === "income";
  const headerClass = bgColorClass || (isIncome ? "bg-green-600" : "bg-red-600");
  const dateLabel = () => `${formData.date || "Hari Ini"}, ${formData.time || "00:00"}`;

  return (
    <div className="text-white">
      {/* header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button onClick={onClose} className="text-gray-400 hover:text-white"><FiX size={20}/></button>
        <h3 className="font-semibold">Tambah Data</h3>
        <button onClick={onSave} className="font-semibold text-blue-400 hover:text-blue-300">Simpan</button>
      </div>

      {/* amount */}
      <div className={`${headerClass} px-6 py-4`}>
        <p className="text-sm text-white/90">{isIncome ? "Jumlah Pemasukan" : "Jumlah Pengeluaran"}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl">Rp</span>
          <input
            type="text" inputMode="numeric" value={formattedAmount}
            onChange={handleAmountChange}
            className="bg-transparent outline-none text-4xl font-bold w-full text-right placeholder:text-white/60"
            placeholder="0"
          />
        </div>
      </div>

      {/* tabs */}
      <div className="px-3 py-2 border-b border-white/10 bg-white/5">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setRecordType("expense")}
            className={`rounded-lg py-2 text-sm font-semibold transition ${
              !isIncome ? "bg-white text-gray-900" : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >Pengeluaran</button>
          <button
            onClick={() => setRecordType("income")}
            className={`rounded-lg py-2 text-sm font-semibold transition ${
              isIncome ? "bg-white text-gray-900" : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >Pemasukan</button>
        </div>
      </div>

      {/* list options */}
      <div className="p-4 space-y-1">
        <ListItem icon={<FiCreditCard />} label="Akun" value={formData.account} />
        <ListItem
          icon={<FiHelpCircle />} label="Kategori" value={formData.category}
          required={formData.category === "Pilih Kategori"}
          onClick={() => onNavigate("category")}
        />
        <ListItem
          icon={<FiCalendar />} label="Tanggal & Waktu" value={dateLabel()}
          onClick={() => onNavigate("date")}
        />
        {/* >>> Label pindah ke view khusus */}
        <ListItem
          icon={<FiTag />} label="Label"
          value={formData.label || "Tambah Label"}
          onClick={() => onNavigate("label")}
        />
      </div>
    </div>
  );
}
