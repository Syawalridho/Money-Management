import React, { useEffect, useState } from "react";

export default function GoalFormModal({
  open,
  onClose,
  onSubmit,     // (payload) => void
  initialData,  // optional (jika edit)
}) {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [current, setCurrent] = useState("");
  const [estimateAmount, setEstimateAmount] = useState("");
  const [estimateUnit, setEstimateUnit] = useState("bulan"); // 'hari' | 'bulan' | 'tahun'
  const [icon, setIcon] = useState("🎯");
  const [color, setColor] = useState("bg-blue-500");

  useEffect(() => {
    if (!open) return;
    // prefill ketika edit
    if (initialData) {
      setName(initialData.name || "");
      setTarget(initialData.target?.toString() || "");
      setCurrent(initialData.current?.toString() || "");
      // coba parse "12 bulan lagi" -> 12 + bulan
      const parts = (initialData.estimate || "").split(" ");
      if (parts.length >= 2 && !Number.isNaN(Number(parts[0]))) {
        setEstimateAmount(parts[0]);
        setEstimateUnit(parts[1]);
      } else {
        setEstimateAmount("");
        setEstimateUnit("bulan");
      }
      setIcon(initialData.icon || "🎯");
      setColor(initialData.color || "bg-blue-500");
    } else {
      // reset untuk create
      setName("");
      setTarget("");
      setCurrent("");
      setEstimateAmount("");
      setEstimateUnit("bulan");
      setIcon("🎯");
      setColor("bg-blue-500");
    }
  }, [open, initialData]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!name || !target) return;

    const payload = {
      id: initialData?.id ?? crypto.randomUUID(),
      name,
      target: Number(target),
      current: current ? Number(current) : 0,
      estimate: estimateAmount ? `${estimateAmount} ${estimateUnit} lagi` : "—",
      icon,
      color,
    };
    onSubmit?.(payload);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* dialog */}
      <div className="relative z-[81] w-full max-w-lg rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
        <h3 className="mb-4 text-xl font-semibold text-white">
          {initialData ? "Edit Tujuan" : "Buat Tujuan Baru"}
        </h3>

        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <label className="text-sm text-white/80">
              Nama Tujuan
              <input
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                placeholder="Misal: Dana Darurat"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm text-white/80">
                Target (Rp)
                <input
                  type="number"
                  min={0}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  placeholder="contoh: 20000000"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  required
                />
              </label>
              <label className="text-sm text-white/80">
                Terkumpul (opsional)
                <input
                  type="number"
                  min={0}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  placeholder="contoh: 4000000"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                />
              </label>
            </div>

            <div className="grid grid-cols-[1fr_auto_auto] gap-3">
              <label className="text-sm text-white/80">
                Estimasi
                <input
                  type="number"
                  min={0}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  placeholder="mis. 12"
                  value={estimateAmount}
                  onChange={(e) => setEstimateAmount(e.target.value)}
                />
              </label>
              <label className="text-sm text-white/80">
                &nbsp;
                <select
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  value={estimateUnit}
                  onChange={(e) => setEstimateUnit(e.target.value)}
                >
                  <option value="hari">hari</option>
                  <option value="bulan">bulan</option>
                  <option value="tahun">tahun</option>
                </select>
              </label>
              <div className="self-end text-white/60 text-xs mb-1">
                (opsional)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm text-white/80">
                Ikon (emoji)
                <input
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  placeholder="mis. 🛡️ / ✈️ / 🏍️"
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                />
              </label>
              <label className="text-sm text-white/80">
                Warna lingkar ikon
                <select
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="bg-blue-500">Biru</option>
                  <option value="bg-green-500">Hijau</option>
                  <option value="bg-red-500">Merah</option>
                  <option value="bg-purple-500">Ungu</option>
                  <option value="bg-orange-500">Oranye</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/15"
            >
              Batal
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-600/90"
            >
              {initialData ? "Simpan Perubahan" : "Tambah Tujuan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
