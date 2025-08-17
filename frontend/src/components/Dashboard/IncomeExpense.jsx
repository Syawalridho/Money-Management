import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function IncomeExpense({ data = [], loading }) {
  const view = data.length ? data : [
    { name: 'Jan', Pemasukan: 0, Pengeluaran: 0 },
    { name: 'Feb', Pemasukan: 0, Pengeluaran: 0 },
    { name: 'Mar', Pemasukan: 0, Pengeluaran: 0 },
    { name: 'Apr', Pemasukan: 0, Pengeluaran: 0 },
    { name: 'Mei', Pemasukan: 0, Pengeluaran: 0 },
    { name: 'Jun', Pemasukan: 0, Pengeluaran: 0 },
  ];

  return (
    <div className="h-80 -mt-6 -ml-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={view} margin={{ top: 30, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#a0aec0' }} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${Math.round(value/1000)}k`} tick={{ fill: '#a0aec0' }} />
          <Tooltip
            contentStyle={{ backgroundColor: 'rgba(20, 20, 20, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.75rem' }}
            formatter={(v) => new Intl.NumberFormat('id-ID').format(Math.round(v))}
          />
          <Legend wrapperStyle={{ color: '#ffffff' }} />
          <Line type="monotone" dataKey="Pemasukan" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }}/>
          <Line type="monotone" dataKey="Pengeluaran" stroke="#ef4444" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
