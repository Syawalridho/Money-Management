import React from 'react';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi'; // Menggunakan ikon untuk visual

// Data simulasi baru sesuai desain
const transactionData = [
    {
        date: '2025-07-04',
        time: '10:15',
        description: 'Gaji Bulanan',
        category: 'Pemasukan',
        amount: 5500000,
        type: 'income'
    },
    {
        date: '2025-07-03',
        time: '12:30',
        description: 'Belanja Kebutuhan Pokok',
        category: 'Kebutuhan',
        amount: -450000,
        type: 'expense'
    },
    {
        date: '2025-07-03',
        time: '08:45',
        description: 'Kopi Pagi',
        category: 'Makanan',
        amount: -25000,
        type: 'expense'
    },
     {
        date: '2025-07-02',
        time: '19:00',
        description: 'Pembayaran Tagihan Listrik',
        category: 'Tagihan',
        amount: -350000,
        type: 'expense'
    },
];

const Transactions = () => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-800 dark:text-gray-400 text-lg">Transaksi Terakhir</h3>
                <a href="transactions" className="font-medium text-blue-400 hover:text-blue-100 text-sm">
                    Lihat Semua
                </a>
            </div>

            {/* Konten Transaksi */}
            <div className="space-y-2">
                {transactionData.map((tx, index) => (
                    <div key={index} className="grid grid-cols-10 gap-4 p-3 rounded-lg hover:bg-gray-700">
                        {/* Kolom Tanggal dan Waktu */}
                        <div className="col-span-2 text-sm">
                            <p className="font-medium text-gray-700 dark:text-gray-100">{tx.date}</p>
                            <p className="text-gray-500 dark:text-gray-300">{tx.time}</p>
                        </div>

                        {/* Kolom Ikon dan Deskripsi */}
                        <div className="col-span-4 flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                tx.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                            }`}>
                                {tx.type === 'income' ? <FiArrowUpRight size={20} /> : <FiArrowDownLeft size={20} />}
                            </div>
                            <p className="font-semibold text-gray-800 dark:text-white">{tx.description}</p>
                        </div>
                        
                        {/* Kolom Kategori */}
                        <div className="col-span-2 flex items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-200">{tx.category}</p>
                        </div>

                        {/* Kolom Jumlah */}
                        <div className="col-span-2 flex items-center justify-end">
                             <p className={`font-semibold text-base ${tx.type === 'income' ? 'text-green-600' : 'text-red-500'}`}>
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