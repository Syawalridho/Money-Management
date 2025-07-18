import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const IncomeExpense = () => {
    const data = [
        { name: 'Jan', Pemasukan: 4000, Pengeluaran: 2400 },
        { name: 'Feb', Pemasukan: 3000, Pengeluaran: 1398 },
        { name: 'Mar', Pemasukan: 5000, Pengeluaran: 3800 },
        { name: 'Apr', Pemasukan: 4780, Pengeluaran: 3908 },
        { name: 'Mei', Pemasukan: 5890, Pengeluaran: 4800 },
        { name: 'Jun', Pemasukan: 4390, Pengeluaran: 3800 },
    ];
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700 h-96">
            <h3 className="font-semibold text-gray-800 dark:text-gray-400">Pemasukan vs Pengeluaran</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 30, right: 20, left: -20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value/1000}k`} />
                    <Tooltip formatter={(value) => new Intl.NumberFormat('id-ID').format(value)} />
                    <Legend />
                    <Line type="monotone" dataKey="Pemasukan" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }}/>
                    <Line type="monotone" dataKey="Pengeluaran" stroke="#ef4444" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default IncomeExpense;
