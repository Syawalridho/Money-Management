import React from 'react';
import { Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const mockTransactions = [
    { id: 1, date: '2024-02-15', type: 'Income', category: 'Salary', description: 'Monthly Salary', amount: 350000000},
    { id: 2, date: '2024-02-14', type: 'Expense', category: 'Shopping', description: 'Grocery Shopping', amount: 305000 },
    { id: 3, date: '2024-02-14', type: 'Expense', category: 'Bills', description: 'Electricity Bill', amount: 100000 },
    { id: 4, date: '2024-02-13', type: 'Income', category: 'Freelance', description: 'Web Development Project', amount: 800000 },
    { id: 5, date: '2024-02-13', type: 'Expense', category: 'Transport', description: 'Fuel', amount: 25000 },
    { id: 6, date: '2024-02-12', type: 'Expense', category: 'Food', description: 'Restaurant Dinner', amount: 130000 },
    { id: 7, date: '2024-02-12', type: 'Income', category: 'Investment', description: 'Stock Dividends', amount: 465000 },
    { id: 8, date: '2024-02-11', type: 'Expense', category: 'Entertainment', description: 'Movie Tickets', amount: 30000 },
];

const TypeBadge = ({ type }) => {
    const isIncome = type === 'Income';
    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            isIncome 
                ? 'bg-green-700 text-green-300' 
                : 'bg-red-700 text-red-300'
        }`}>
            {type}
        </span>
    );
};

const TransactionsTable = () => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-200">
                    <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4"><input type="checkbox" className="rounded"/></th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Type</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3 text-right">Amount</th>
                            <th scope="col" className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockTransactions.map((tx) => (
                            <tr key={tx.id} className="bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <td className="p-4"><input type="checkbox" className="rounded"/></td>
                                <td className="px-6 py-4">{tx.date}</td>
                                <td className="px-6 py-4"><TypeBadge type={tx.type} /></td>
                                <td className="px-6 py-4">{tx.category}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-300">{tx.description}</td>
                                <td className={`px-6 py-4 text-right font-semibold ${tx.type === 'Income' ? 'text-green-400' : 'text-red-400'}`}>
                                    {tx.type === 'Income' ? '+' : '-'}Rp{tx.amount.toFixed(2)}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center space-x-3">
                                        <button className="text-gray-500 hover:text-blue-600"><Edit size={18} /></button>
                                        <button className="text-gray-500 hover:text-red-600"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between p-4 text-sm">
                <span className="text-gray-600">Showing 1 to 8 of 50 entries</span>
                <div className="flex items-center space-x-2">
                    <button className="p-2 border rounded-md text-black hover:bg-gray-100 disabled:opacity-50" disabled><ChevronLeft size={16}/></button>
                    <button className="w-8 h-8 border rounded-md bg-blue-600 text-white">1</button>
                    <button className="w-8 h-8 border rounded-md text-black hover:bg-gray-100">2</button>
                    <button className="w-8 h-8 border rounded-md text-black hover:bg-gray-100">3</button>
                    <span className="text-black">...</span>
                    <button className="w-8 h-8 border rounded-md text-black hover:bg-gray-100">5</button>
                    <button className="p-2 border rounded-md text-black hover:bg-gray-100"><ChevronRight size={16}/></button>
                </div>
            </div>
        </div>
    );
};

export default TransactionsTable;