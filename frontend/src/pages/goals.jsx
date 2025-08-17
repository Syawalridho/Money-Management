import React, { useEffect, useMemo, useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import { GoalsHeader, GoalsGrid, GoalFormModal } from "../components/Goals";
import { listGoals as fetchGoals, createGoal, updateGoal, deleteGoal } from "../services/goalsService";
// fallback lokal kalau fetch gagal (opsional)
const fallback = [
  {
    id: crypto.randomUUID(),
    name: "Beli Motor Baru",
    icon: "🏍️",
    color: "bg-blue-500",
    current: 4_000_000,
    target: 20_000_000,
    estimate: "12 bulan lagi",
  },
];

export default function SavingGoalsPage() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [error, setError] = useState("");

  // load awal dari backend
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchGoals();
        if (mounted) setGoals(data || []);
      } catch (e) {
        console.error(e);
        // pakai fallback agar halaman tetap punya konten
        if (mounted) setGoals(fallback);
        setError("Gagal memuat data goals");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const openCreate = () => { setEditingGoal(null); setModalOpen(true); };
  const openEdit = (goal) => { setEditingGoal(goal); setModalOpen(true); };

  const handleDelete = async (goal) => {
    // optimistic remove
    const prev = goals;
    setGoals((g) => g.filter((x) => x.id !== goal.id));
    try {
      await deleteGoal(goal.id);
    } catch (e) {
      console.error(e);
      setGoals(prev); // rollback
      alert("Gagal menghapus goal");
    }
  };

  const handleSubmit = async (payload) => {
    try {
      if (editingGoal) {
        // optimistic update
        const prev = goals;
        setGoals((g) => g.map((x) => (x.id === payload.id ? payload : x)));
        try {
          const saved = await updateGoal(payload.id, payload);
          setGoals((g) => g.map((x) => (x.id === saved.id ? saved : x)));
        } catch (e) {
          console.error(e);
          setGoals(prev); // rollback
          alert("Gagal menyimpan perubahan");
        }
      } else {
        // optimistic create (id sementara)
        const tempId = crypto.randomUUID();
        const temp = { ...payload, id: tempId };
        setGoals((g) => [temp, ...g]);
        try {
          const saved = await createGoal(payload);
          // replace temp dengan hasil dari server
          setGoals((g) => g.map((x) => (x.id === tempId ? saved : x)));
        } catch (e) {
          console.error(e);
          // rollback
          setGoals((g) => g.filter((x) => x.id !== tempId));
          alert("Gagal membuat goal");
        }
      }
    } finally {
      setModalOpen(false);
      setEditingGoal(null);
    }
  };

  const orderedGoals = useMemo(() => [...goals], [goals]);

  return (
    <div className="p-4 md:p-6 2xl:p-10">
      <GlassCard>
        <GoalsHeader
          title="Tujuan Keuangan"
          subtitle={loading ? "Memuat..." : (error || "Wujudkan impian finansial Anda, satu per satu.")}
          onCreate={openCreate}
        />
      </GlassCard>

      <div className="mt-6">
        <GoalsGrid
          goals={orderedGoals}
          onEditGoal={openEdit}
          onDeleteGoal={handleDelete}
        />
      </div>

      <GoalFormModal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditingGoal(null); }}
        onSubmit={handleSubmit}
        initialData={editingGoal}
      />
    </div>
  );
}
