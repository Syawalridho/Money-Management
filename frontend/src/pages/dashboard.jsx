import React, { useEffect, useMemo, useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import IncomeExpense from "../components/Dashboard/IncomeExpense";
import SpendingCategory from "../components/Dashboard/SpendingCategory";
import SummaryCards from "../components/Dashboard/SummaryCards";
import Transactions from "../components/Dashboard/Transactions";
import { listTransactions } from "@/services/transactionsService";

const fmtIDR = (n) => new Intl.NumberFormat("id-ID").format(Math.round(n || 0));
const monthKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

export default function Dashboard() {
  const [txs, setTxs] = useState([]);
  const [loading, setLoading] = useState(true);

  // load awal
  useEffect(() => {
    (async () => {
      try {
        const data = await listTransactions();
        data.sort((a, b) => new Date(b.occurred_at) - new Date(a.occurred_at));
        setTxs(data);
      } catch (e) {
        console.error("load transactions failed", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // auto-update setelah AddRecord simpan
  useEffect(() => {
    function onCreated(e) {
      const tx = e.detail;
      setTxs((prev) => {
        const next = [tx, ...prev];
        next.sort((a, b) => new Date(b.occurred_at) - new Date(a.occurred_at));
        return next;
      });
    }
    window.addEventListener("tx:created", onCreated);
    return () => window.removeEventListener("tx:created", onCreated);
  }, []);

  // derivasi untuk kartu/ grafik
  const { balance, monthIncome, monthExpense, lastTransactions, chart6Months, pieByCategoryThisMonth } =
    useMemo(() => {
      const now = new Date();
      const thisKey = monthKey(now);

      let incomeAll = 0;
      let expenseAll = 0;
      let monthIncome = 0;
      let monthExpense = 0;

      const byMonth = new Map();
      const catThisMonth = new Map();

      for (const t of txs) {
        const amt = Number(t.amount || 0);
        const d = new Date(t.occurred_at);
        const key = monthKey(d);

        if (t.type === "income") incomeAll += amt;
        else expenseAll += amt;

        const bucket = byMonth.get(key) || { income: 0, expense: 0 };
        if (t.type === "income") bucket.income += amt;
        else bucket.expense += amt;
        byMonth.set(key, bucket);

        if (key === thisKey) {
          if (t.type === "income") monthIncome += amt;
          else {
            monthExpense += amt;
            const cur = catThisMonth.get(t.category) || 0;
            catThisMonth.set(t.category, cur + amt);
          }
        }
      }

      const months = [];
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const k = monthKey(d);
        const b = byMonth.get(k) || { income: 0, expense: 0 };
        const label = d.toLocaleString("id-ID", { month: "short" });
        months.push({ name: label, Pemasukan: b.income, Pengeluaran: b.expense });
      }

      const pie = Array.from(catThisMonth.entries()).map(([name, value]) => ({ name, value }));

      return {
        balance: incomeAll - expenseAll,
        monthIncome,
        monthExpense,
        lastTransactions: txs.slice(0, 8),
        chart6Months: months,
        pieByCategoryThisMonth: pie,
      };
    }, [txs]);

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6">
        <GlassCard title="Saldo Utama">
          <p className="text-4xl font-bold text-white">Rp{fmtIDR(balance)}</p>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GlassCard title="Pemasukan vs Pengeluaran">
            <IncomeExpense data={chart6Months} loading={loading} />
          </GlassCard>
        </div>

        <div className="lg:col-span-1">
          <GlassCard title="Pengeluaran per Kategori">
            <SpendingCategory data={pieByCategoryThisMonth} loading={loading} />
          </GlassCard>
        </div>

        <div className="lg:col-span-3">
          <GlassCard title="Ringkasan Bulan Ini">
            <SummaryCards incomeThisMonth={monthIncome} expenseThisMonth={monthExpense} />
          </GlassCard>
        </div>

        <div className="lg:col-span-3">
          <GlassCard title="Transaksi Terakhir">
            <Transactions items={lastTransactions} loading={loading} />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
