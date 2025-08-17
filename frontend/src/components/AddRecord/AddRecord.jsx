import React, { useEffect, useState } from "react";
import MainView from "./MainView";
import CategoryView from "./CategoryView";
import DateView from "./DateView";
import LabelView from "./LabelView";
import { createTransaction } from "@/services/transactionsService";

const initialForm = {
  amount: "", account: "Cash", category: "Pilih Kategori",
  date: "", time: "", label: "",
};

export default function AddRecord({ isOpen, onClose, onCreated }) {
  const [view, setView] = useState("main");           // 'main' | 'category' | 'date' | 'label'
  const [recordType, setRecordType] = useState("expense");
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (!isOpen) {
      setView("main"); setRecordType("expense"); setFormData(initialForm);
    }
  }, [isOpen]);

  const handleChangeType = (t) => {
    setRecordType(t);
    setFormData((s) => ({ ...s, category: "Pilih Kategori" }));
  };

  const handleSelectCategory = (name) => {
    setFormData((s) => ({ ...s, category: name }));
    setView("main");
  };

  const handleSaveDate = ({ date, time }) => {
    setFormData((s) => ({ ...s, date: date || s.date, time: time || s.time }));
    setView("main");
  };

  async function handleSave() {
    if (!formData.amount) return alert("Nominal belum diisi");
    if (!formData.category || formData.category === "Pilih Kategori")
      return alert("Kategori belum dipilih");

    const now = new Date();
    const dateStr =
      typeof formData.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(formData.date)
        ? formData.date : now.toISOString().slice(0, 10);
    const timeStr =
      typeof formData.time === "string" && /^\d{2}:\d{2}$/.test(formData.time)
        ? formData.time : "00:00";
    const occurred_at = `${dateStr} ${timeStr}:00`;

    const payload = {
      type: recordType === "income" ? "income" : "expense",
      account: formData.account || "Cash",
      category: formData.category,
      amount: Number(String(formData.amount).replace(/[^\d]/g, "")) || 0,
      occurred_at,
      label: formData.label || null,
      user_id: null,
    };

    try {
      const saved = await createTransaction(payload);
      onCreated?.(saved);
      window.dispatchEvent(new CustomEvent("tx:created", { detail: saved }));
      onClose();
    } catch (e) {
      console.error("CREATE FAILED", e);
      alert("Gagal menyimpan transaksi");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#0b1220]/70 backdrop-blur-xl border border-white/10">
        {view === "main" && (
          <MainView
            recordType={recordType}
            setRecordType={handleChangeType}
            formData={formData}
            setFormData={setFormData}
            onNavigate={setView}
            onSave={handleSave}
            onClose={onClose}
          />
        )}

        {view === "category" && (
          <CategoryView
            type={recordType}
            onBack={() => setView("main")}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {view === "date" && (
          <DateView
            onBack={() => setView("main")}
            onSaveDate={handleSaveDate}
            onSave={handleSaveDate}
            defaultDate={formData.date}
            defaultTime={formData.time}
          />
        )}

        {view === "label" && (
          <LabelView
            formData={formData}
            setFormData={setFormData}
            onClose={() => setView("main")}
          />
        )}
      </div>
    </div>
  );
}
