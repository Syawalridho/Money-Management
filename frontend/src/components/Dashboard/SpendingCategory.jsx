import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const SpendingCategory = () => {
    const data = [
        { name: 'Makanan', value: 400 },
        { name: 'Transportasi', value: 300 },
        { name: 'Belanja', value: 300 },
        { name: 'Tagihan', value: 200 },
    ];
    const COLORS = ['#3b82f6', '#ef4444', '#f97316', '#8b5cf6'];
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-96">
             <h3 className="font-semibold text-gray-800 mb-4">Pengeluaran per Kategori</h3>
             <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`Rp${new Intl.NumberFormat('id-ID').format(value)}`, name]} />
                </PieChart>
             </ResponsiveContainer>
             <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-600">
                {data.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
                        <span>{entry.name}</span>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default SpendingCategory;
