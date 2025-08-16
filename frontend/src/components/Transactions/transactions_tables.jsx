import { useState } from "react";

const mockTransactions = [
  { id: 1, date: "2025-08-01", type: "Income", category: "Salary", description: "Monthly salary", amount: 5000 },
  { id: 2, date: "2025-08-05", type: "Expense", category: "Food", description: "Groceries", amount: 150 },
  { id: 3, date: "2025-08-07", type: "Expense", category: "Transport", description: "Fuel", amount: 60 },
];

const Badge = ({ children, tone }) => (
  <span
    className={`inline-flex items-center justify-center rounded-full px-2 py-1 text-xs border
      ${tone === "green"
        ? "text-green-300 border-green-400/40 bg-green-500/15"
        : "text-red-300 border-red-400/40 bg-red-500/15"}`}
  >
    {children}
  </span>
);

export default function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(mockTransactions.length / itemsPerPage);

  const currentTransactions = mockTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="relative w-full">
      {/* Title + link kanan */}
      <div className="flex items-center justify-between mb-3 px-4 pt-4">
        <h2 className="text-lg font-semibold text-white">Transaksi</h2>
        <a
          href="/report"
          className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2"
        >
          Lihat semua transaksi
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          {/* HEADER */}
          <thead className="text-xs uppercase">
            <tr className="bg-black/40 backdrop-blur-xl text-white/80">
              <th scope="col" className="p-4 text-center align-middle">
                <input type="checkbox" className="rounded" />
              </th>
              <th scope="col" className="px-6 py-3 text-left align-middle">Date</th>
              <th scope="col" className="px-6 py-3 text-center align-middle">Type</th>
              <th scope="col" className="px-6 py-3 text-left align-middle">Category</th>
              <th scope="col" className="px-6 py-3 text-left align-middle">Description</th>
              <th scope="col" className="px-6 py-3 text-right align-middle">Amount</th>
              <th scope="col" className="px-6 py-3 text-center align-middle">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {currentTransactions.map((tx) => (
              <tr key={tx.id} className="border-b border-white/10">
                <td className="p-4 text-center align-middle">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-6 py-4 text-left align-middle">{tx.date}</td>
                <td className="px-6 py-4 text-center align-middle">
                  <Badge tone={tx.type === "Income" ? "green" : "red"}>{tx.type}</Badge>
                </td>
                <td className="px-6 py-4 text-left align-middle">{tx.category}</td>
                <td className="px-6 py-4 text-left align-middle">{tx.description}</td>
                <td
                  className={`px-6 py-4 text-right align-middle font-semibold ${
                    tx.type === "Income" ? "text-green-300" : "text-red-300"
                  }`}
                >
                  {tx.type === "Income" ? "+" : "-"}Rp{tx.amount.toLocaleString("id-ID")}
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <button className="text-blue-400 hover:text-blue-300 mr-2">✏️</button>
                  <button className="text-red-400 hover:text-red-300">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer: showing + pagination */}
      <div className="flex items-center justify-between px-6 py-3 text-sm text-gray-400">
        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, mockTransactions.length)} of{" "}
          {mockTransactions.length} entries
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-2 py-1 rounded ${
                currentPage === idx + 1 ? "bg-blue-500 text-white" : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
