import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#3b82f6', '#ef4444', '#f97316', '#8b5cf6', '#10b981', '#f59e0b'];

export default function SpendingCategory({ data = [], loading }) {
  const view = data.length ? data : [{ name: '—', value: 1 }];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie data={view} cx="50%" cy="50%" labelLine={false} outerRadius={100} dataKey="value">
            {view.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: 'rgba(20, 20, 20, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.75rem' }}
            formatter={(value, name) => [`Rp${new Intl.NumberFormat('id-ID').format(Math.round(value))}`, name]}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-200">
        {view.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
