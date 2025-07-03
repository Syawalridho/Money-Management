import React from 'react';
import { ArrowUpRight, ArrowDownLeft, WalletCards, Scale } from 'lucide-react';

const StatCard = ({ icon, title, value, bgColor, iconColor }) => (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
        <div className={`p-3 rounded-full ${bgColor}`}>
            {React.cloneElement(icon, { color: iconColor, size: 24 })}
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);


const TransactionStats = () => {
    const stats = [
        { icon: <WalletCards />, title: 'Total Transactions', value: '50', bgColor: 'bg-blue-100', iconColor: '#3B82F6' },
        { icon: <ArrowUpRight />, title: 'Total Income', value: 'Rp600.000,00', bgColor: 'bg-green-100', iconColor: '#10B981' },
        { icon: <ArrowDownLeft />, title: 'Total Expenses', value: 'Rp230.000,00', bgColor: 'bg-red-100', iconColor: '#EF4444' },
        { icon: <Scale />, title: 'Net Balance', value: 'Rp4.600.000,00', bgColor: 'bg-purple-100', iconColor: '#8B5CF6' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
        </div>
    );
};

export default TransactionStats;