// frontend/src/pages/calendar.jsx
import React, { useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GlassCard from "../components/ui/GlassCard";

// Nama hari & bulan (ID)
const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const monthNames = [
  "Januari","Februari","Maret","April","Mei","Juni",
  "Juli","Agustus","September","Oktober","November","Desember",
];

// Contoh data transaksi (pakai punyamu sendiri bila sudah ada)
const transactionData = {
  "2025-08-04": {
    details: [{ id: 1, desc: "Bonus kecil", amount: 50000 }, { id: 2, desc: "Ngopi", amount: -25000 }],
  },
  "2025-08-15": {
    details: [{ id: 3, desc: "Invoice Project A", amount: 1200000 }, { id: 4, desc: "Langganan SaaS", amount: -450000 }],
  },
  "2025-08-25": {
    details: [{ id: 5, desc: "Dividen", amount: 5500000 }, { id: 6, desc: "Hadiah", amount: -750000 }],
  },
};

const fmtIDR = (n) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(Math.abs(n));
const isoDate = (y, m, d) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();

export default function CalendarPage() {
  const [current, setCurrent] = useState(new Date(2025, 7, 1)); // contoh: Agustus 2025
  const [selectedDate, setSelectedDate] = useState(null);

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay(); // 0=Min
  const totalDays = daysInMonth(year, month);

  const todayIso = useMemo(() => {
    const t = new Date();
    return isoDate(t.getFullYear(), t.getMonth(), t.getDate());
  }, []);

  // Buat grid 7x6 stabil
  const cells = useMemo(() => {
    const arr = [];
    for (let i = 0; i < firstDay; i++) arr.push(null);
    for (let d = 1; d <= totalDays; d++) arr.push(d);
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, [firstDay, totalDays]);

  const goMonth = (delta) => setCurrent(new Date(year, month + delta, 1));

  // Detail transaksi untuk tanggal terpilih
  const selectedKey = selectedDate ? isoDate(year, month, selectedDate) : null;
  const detailList = selectedKey ? (transactionData[selectedKey]?.details || []) : [];

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <GlassCard>
        {/* Header kalender */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => goMonth(-1)}
            className="h-9 w-9 rounded-full hover:bg-white/10 grid place-items-center"
            aria-label="Sebelumnya"
            title="Bulan sebelumnya"
          >
            <FiChevronLeft size={24} className="text-white/90" />
          </button>

          <h2 className="text-xl font-bold text-white">
            {monthNames[month]} {year}
          </h2>

          <button
            onClick={() => goMonth(1)}
            className="h-9 w-9 rounded-full hover:bg-white/10 grid place-items-center"
            aria-label="Berikutnya"
            title="Bulan berikutnya"
          >
            <FiChevronRight size={24} className="text-white/90" />
          </button>
        </div>

        {/* Nama hari */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map((d) => (
            <div key={d} className="py-2 text-center text-sm font-semibold text-white/70">
              {d}
            </div>
          ))}
        </div>

        {/* Grid tanggal: tiap sel = kaca gelap */}
        <div className="grid grid-cols-7 gap-2">
          {cells.map((d, idx) => {
            if (d === null) {
              return <div key={idx} className="h-28 rounded-xl border border-white/10 bg-white/5/0" />;
            }

            const dateIso = isoDate(year, month, d);
            const txs = transactionData[dateIso]?.details || [];
            const isToday = dateIso === todayIso;
            const isSelected = d === selectedDate;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDate(d)}
                className={[
                  "relative h-28 rounded-xl p-3 text-left transition-colors",
                  "border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10",
                  isToday ? "ring-2 ring-blue-400/60" : "",
                  isSelected ? "outline outline-blue-400/50" : "",
                ].join(" ")}
              >
                {/* Nomor tanggal */}
                <div className="text-sm font-medium text-white/90">{d}</div>

                {/* Preview 2 transaksi teratas (opsional) */}
                <div className="mt-1 space-y-0.5">
                  {txs.slice(0, 2).map((t) => (
                    <div
                      key={t.id}
                      className={`text-xs ${t.amount >= 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {t.amount >= 0 ? "+ " : "- "}Rp{fmtIDR(t.amount)}
                    </div>
                  ))}
                  {txs.length > 2 && (
                    <div className="text-[10px] text-white/60">+{txs.length - 2} lainnya</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail transaksi (TETAP ADA) */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Detail Transaksi {selectedDate ? `${selectedDate} ${monthNames[month]} ${year}` : ""}
          </h3>

          {selectedDate && detailList.length > 0 ? (
            <div className="space-y-3">
              {detailList.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3"
                >
                  <span className="text-white/85">{t.desc}</span>
                  <span
                    className={`font-semibold ${
                      t.amount >= 0 ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {t.amount >= 0 ? "+" : "-"}Rp{fmtIDR(t.amount)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/60">
              {selectedDate ? "Tidak ada transaksi pada tanggal ini." : "Klik sebuah tanggal untuk melihat detail."}
            </p>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
