import React from 'react';
import { ArrowUpRight, ArrowDownLeft, WalletCards, Scale } from 'lucide-react';

const StatCard = ({ icon, title, value, bgColor, iconColor }) => (
    <div className="p-6 rounded-xl flex items-center space-x-4 
                    bg-white/10 backdrop-blur-sm border border-white/10">
        <div className={`p-3 rounded-full ${bgColor}`}>
            {React.cloneElement(icon, { color: iconColor, size: 24 })}
        </div>
        <div>
            <p className="text-sm text-white/70">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    </div>
);

const TransactionStats = () => {
    const stats = [
        { icon: <WalletCards />, title: 'Total Transactions', value: '50', bgColor: 'bg-blue-500/20', iconColor: '#3B82F6' },
        { icon: <ArrowUpRight />, title: 'Total Income', value: 'Rp600.000,00', bgColor: 'bg-green-500/20', iconColor: '#10B981' },
        { icon: <ArrowDownLeft />, title: 'Total Expenses', value: 'Rp230.000,00', bgColor: 'bg-red-500/20', iconColor: '#EF4444' },
        { icon: <Scale />, title: 'Net Balance', value: 'Rp4.600.000,00', bgColor: 'bg-purple-500/20', iconColor: '#8B5CF6' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
        </div>
    );
};

export default TransactionStats;
