import React from 'react';
import { useAuth } from '../../contexts/AuthContext'; // Sesuaikan path jika perlu

const AccountActionsCard = () => {
    const { logout } = useAuth();

    return (
        <div className="mt-12 rounded-xl border border-red-500/50 bg-red-50/50 dark:bg-gray-800/20 p-6">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-500">Zona Berbahaya</h3>
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Logout dari Akun</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Keluar dari sesi Anda saat ini di perangkat ini.</p>
                </div>
                <button onClick={logout} className="w-full md:w-auto flex-shrink-0 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                    Logout
                </button>
            </div>
            <div className="mt-4 pt-4 border-t border-red-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <p className="font-medium text-red-600 dark:text-red-500">Hapus Akun Ini</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tindakan ini tidak dapat diurungkan. Semua data akan hilang.</p>
                </div>
                <button className="w-full md:w-auto flex-shrink-0 rounded-md border border-red-600 bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700">
                    Hapus Akun
                </button>
            </div>
        </div>
    );
};

export default AccountActionsCard;