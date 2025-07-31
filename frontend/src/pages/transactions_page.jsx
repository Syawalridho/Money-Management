import React from 'react';
// Impor komponen-komponen khusus transaksi
import TransactionStats from '../components/Transactions/transactions_stats';
import TransactionActions from '../components/Transactions/transactions_actions';
import TransactionsTable from '../components/Transactions/transactions_tables';

const TransactionsPage = () => {
    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Area Konten */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* Isi Halaman Utama */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
                    <div className="container mx-auto px-6 py-8">
                        {/* Wrapper untuk semua konten dengan spacing */}
                        <div className="space-y-8">
                            {/* Bagian Atas: Kartu Statistik */}
                            <TransactionStats />

                            {/* Bagian Tengah: Filter dan Tombol Aksi */}
                            <TransactionActions />

                            {/* Bagian Utama: Tabel Transaksi */}
                            <TransactionsTable />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TransactionsPage;