import React from 'react';
import { FiTarget, FiDollarSign, FiTrendingUp, FiPlus } from 'react-icons/fi';

// Data simulasi untuk tujuan keuangan
const goalsData = [
    {
        name: 'Beli Motor Baru',
        icon: '🏍️',
        color: 'bg-blue-500',
        current: 4000000,
        target: 20000000,
        estimate: '12 bulan lagi'
    },
    {
        name: 'Dana Darurat',
        icon: '🛡️',
        color: 'bg-green-500',
        current: 8500000,
        target: 15000000,
        estimate: '6 bulan lagi'
    },
    {
        name: 'Liburan ke Jepang',
        icon: '✈️',
        color: 'bg-red-500',
        current: 1200000,
        target: 10000000,
        estimate: '9 bulan lagi'
    }
];

// Fungsi untuk format Rupiah
const formatRupiah = (number) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
}).format(number);

// Komponen Kartu untuk setiap tujuan
const GoalCard = ({ goal }) => {
    const percentage = (goal.current / goal.target) * 100;

    return (
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${goal.color}`}>
                        {goal.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-white">{goal.name}</h3>
                        <p className="text-sm text-gray-400">Estimasi Selesai: {goal.estimate}</p>
                    </div>
                </div>
                 <button className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600">
                    <FiTrendingUp size={18}/>
                </button>
            </div>
            <div>
                <div className="flex justify-between items-end mb-1">
                    <p className="text-green-400 font-semibold">{formatRupiah(goal.current)}</p>
                    <p className="text-sm text-gray-400">Target: {formatRupiah(goal.target)}</p>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div 
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                 <p className="text-right text-sm font-medium text-gray-300 mt-1">{percentage.toFixed(0)}%</p>
            </div>
        </div>
    );
};


// Komponen Utama Saving Goals
const SavingGoals = () => {
    return (
        <div className="p-4 md:p-6 2xl:p-10 dark:bg-gray-900 min-h-screen">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-white">Tujuan Keuangan</h1>
                    <p className="text-gray-400 mt-1">Wujudkan impian finansial Anda, satu per satu.</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700">
                    <FiPlus size={20}/>
                    <span>Buat Tujuan Baru</span>
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {goalsData.map(goal => <GoalCard key={goal.name} goal={goal} />)}
            </div>
        </div>
    );
};

export default SavingGoals;
