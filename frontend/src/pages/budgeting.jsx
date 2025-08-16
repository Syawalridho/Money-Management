import React, { useState, useMemo } from "react";
import GlassCard from "../components/ui/GlassCard"; // ⬅️ tambah
import BudgetSummary from "../components/Budgeting/BudgetingSummary";
import BudgetControls from "../components/Budgeting/BudgetingControls";
import BudgetList from "../components/Budgeting/BudgetList";
import AddBudgetForm from "../components/Budgeting/AddBudgetForm";

export default function BudgetingPage() {
  const [budgets, setBudgets] = useState([
    { category: "Makanan", limit: 1500000, spent: 1200000 },
    { category: "Transportasi", limit: 500000, spent: 450000 },
    { category: "Hiburan", limit: 600000, spent: 650000 },
    { category: "Tagihan", limit: 1000000, spent: 800000 },
  ]);
  const [sortOrder, setSortOrder] = useState("sisa");

  const sortedBudgets = useMemo(() => {
    return [...budgets].sort((a, b) => {
      if (sortOrder === "sisa") return (a.limit - a.spent) - (b.limit - b.spent);
      if (sortOrder === "nama") return a.category.localeCompare(b.category);
      if (sortOrder === "pengeluaran") return (b.spent / b.limit) - (a.spent / a.limit);
      return 0;
    });
  }, [budgets, sortOrder]);

  const addBudget = (budget) => setBudgets([...budgets, budget]);
  const deleteBudget = (category) => setBudgets(budgets.filter((b) => b.category !== category));

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Anggaran Bulan Ini</h1>
        <p className="text-white/70 mt-1">Lacak dan kelola batas pengeluaran Anda per kategori.</p>
      </div>

      {/* Summary */}
      <GlassCard className="mb-6">
        <BudgetSummary budgets={budgets} />
      </GlassCard>

      {/* Controls + List */}
      <GlassCard className="mb-6">
        <BudgetControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <BudgetList budgets={sortedBudgets} onDelete={deleteBudget} />
      </GlassCard>

      {/* Add Form */}
      <GlassCard>
        <AddBudgetForm onAdd={addBudget} />
      </GlassCard>
    </div>
  );
}
