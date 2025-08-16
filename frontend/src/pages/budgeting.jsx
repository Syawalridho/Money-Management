import React, { useState, useMemo } from "react";

// Import layout components
import Sidebar from "../partial/sidebar";
import Header from "../partial/header";

// Import budgeting components
import BudgetSummary from "../components/Budgeting/BudgetingSummary";
import BudgetControls from "../components/Budgeting/BudgetingControls";
import BudgetList from "../components/Budgeting/BudgetList";
import AddBudgetForm from "../components/Budgeting/AddBudgetForm";

export default function BudgetingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [budgets, setBudgets] = useState([
    { category: "Makanan", limit: 1500000, spent: 1200000 },
    { category: "Transportasi", limit: 500000, spent: 450000 },
    { category: "Hiburan", limit: 600000, spent: 650000 },
    { category: "Tagihan", limit: 1000000, spent: 800000 },
  ]);
  const [sortOrder, setSortOrder] = useState("sisa"); // 'sisa', 'nama', 'pengeluaran'

  const sortedBudgets = useMemo(() => {
    return [...budgets].sort((a, b) => {
      if (sortOrder === "sisa") {
        return (a.limit - a.spent) - (b.limit - b.spent);
      }
      if (sortOrder === "nama") {
        return a.category.localeCompare(b.category);
      }
      if (sortOrder === "pengeluaran") {
        return (b.spent / b.limit) - (a.spent / a.limit);
      }
      return 0;
    });
  }, [budgets, sortOrder]);

  const addBudget = (budget) => {
    setBudgets([...budgets, budget]);
  };

  const deleteBudget = (category) => {
    setBudgets(budgets.filter((b) => b.category !== category));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Anggaran Bulan Ini</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Lacak dan kelola batas pengeluaran Anda per kategori.</p>
            </div>

            {/* Content */}
            <BudgetSummary budgets={budgets} />
            
            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <BudgetControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
              <BudgetList budgets={sortedBudgets} onDelete={deleteBudget} />
            </div>

            <AddBudgetForm onAdd={addBudget} />
          </div>
        </main>
      </div>
    </div>
  );
}