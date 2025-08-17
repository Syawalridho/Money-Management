import React, { useState } from "react";

export default function DateView({
  onBack,
  onSaveDate,           // prefer
  onSave,               // fallback
  defaultDate = "",
  defaultTime = "",
}) {
  const today = new Date();
  const [date, setDate] = useState(
    defaultDate || today.toISOString().slice(0, 10)
  );
  const [time, setTime] = useState(defaultTime || "00:00");

  const submit = () => {
    const payload = { date, time };
    if (onSaveDate) onSaveDate(payload);
    else if (onSave) onSave(payload);
  };

  return (
    <div className="text-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button onClick={onBack} className="text-gray-400 hover:text-white">
          Kembali
        </button>
        <h3 className="font-semibold">Tanggal & Waktu</h3>
        <button onClick={submit} className="text-blue-400 hover:text-blue-300">
          Simpan
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <label className="block text-gray-300 mb-1">Tanggal</label>
          <input
            type="date"
            className="w-full rounded-md bg-white/10 px-3 py-2 outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Waktu</label>
          <input
            type="time"
            className="w-full rounded-md bg-white/10 px-3 py-2 outline-none"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
