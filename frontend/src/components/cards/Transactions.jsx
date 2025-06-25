import React from 'react';

// 1. Pastikan nama fungsi komponen adalah 'Transactions'
const Transactions = () => {
    // Data simulasi untuk transaksi
    const transactionData = [
        { icon: '🍔', description: 'Makan Siang di Warteg', category: 'Makanan', amount: -25000, time: '12:30 PM' },
        { icon: '💰', description: 'Gaji Bulanan', category: 'Pemasukan', amount: 5500000, time: '09:00 AM' },
        { icon: '☕', description: 'Kopi Janji Jiwa', category: 'Minuman', amount: -22000, time: '08:45 AM' },
        { icon: '�', description: 'Isi Bensin Pertamax', category: 'Transportasi', amount: -150000, time: 'Kemarin' },
        { icon: '🛒', description: 'Belanja Bulanan', category: 'Kebutuhan', amount: -450000, time: 'Kemarin' },
    ];

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">Transaksi Terkini</h3>
            <ul className="space-y-4">
                {transactionData.map((tx, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">{tx.icon}</div>
                            <div>
                                <p className="font-medium text-gray-800">{tx.description}</p>
                                <p className="text-sm text-gray-500">{tx.time}</p>
                            </div>
                        </div>
                        <p className={`font-semibold ${tx.amount > 0 ? 'text-green-500' : 'text-gray-700'}`}>
                            {tx.amount > 0 ? '+' : ''}Rp{new Intl.NumberFormat('id-ID').format(Math.abs(tx.amount))}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// 2. Pastikan Anda mengekspor nama yang sama persis
export default Transactions;