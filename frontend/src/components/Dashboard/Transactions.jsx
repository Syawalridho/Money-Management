import React from 'react';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

const transactionData = [
    { date: '2025-07-04', time: '10:15', description: 'Gaji Bulanan', category: 'Pemasukan', amount: 5500000, type: 'income' },
    { date: '2025-07-03', time: '12:30', description: 'Belanja Kebutuhan Pokok', category: 'Kebutuhan', amount: -450000, type: 'expense' },
    { date: '2025-07-03', time: '08:45', description: 'Kopi Pagi', category: 'Makanan', amount: -25000, type: 'expense' },
    { date: '2025-07-02', time: '19:00', description: 'Pembayaran Tagihan Listrik', category: 'Tagihan', amount: -350000, type: 'expense' },
];

const Transactions = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-4 -mt-2">
                <div></div> {/* Spacer */}
                <a href="transactions" className="font-medium text-blue-400 hover:text-blue-300 text-sm">
                    Lihat Semua
                </a>
            </div>

            <div className="space-y-2">
                {transactionData.map((tx, index) => (
                    <div key={index} className="grid grid-cols-10 gap-4 p-3 rounded-lg hover:bg-white/10">
                        <div className="col-span-2 text-sm">
                            <p className="font-medium text-gray-100">{tx.date}</p>
                            <p className="text-gray-300">{tx.time}</p>
                        </div>
                        <div className="col-span-4 flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${ tx.type === 'income' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400' }`}>
                                {tx.type === 'income' ? <FiArrowUpRight size={20} /> : <FiArrowDownLeft size={20} />}
                            </div>
                            <p className="font-semibold text-white">{tx.description}</p>
                        </div>
                        <div className="col-span-2 flex items-center">
                            <p className="text-sm text-gray-200">{tx.category}</p>
                        </div>
                        <div className="col-span-2 flex items-center justify-end">
                             <p className={`font-semibold text-base ${tx.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                                {tx.type === 'income' ? '+' : '-'}Rp{new Intl.NumberFormat('id-ID').format(Math.abs(tx.amount))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transactions;
