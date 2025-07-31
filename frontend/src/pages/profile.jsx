import React, { useState } from 'react';

// Impor komponen-komponen card yang sudah dipisah
import PersonalInfoCard from '../components/Profile/personal';
import PasswordCard from '../components/Profile/password_card';
import PreferencesCard from '../components/Profile/preference';
import AccountActionsCard from '../components/Profile/dangerZone';

const ProfilePage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Mengambil semua data dari form
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Data yang akan disimpan:', data);
        // Kirim 'data' ini ke API Anda
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
            {/* Area Konten */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <main>
                    <div className="mx-auto max-w-4xl p-4 md:p-6 2xl:p-10">
                        {/* Header Halaman */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Pengaturan Akun</h1>
                        </div>

                        {/* Form utama membungkus semua card agar bisa disubmit bersamaan */}
                        <form onSubmit={handleSaveChanges} className="space-y-8">
                            
                            {/* Render semua komponen card di sini */}
                            <PersonalInfoCard />
                            <PasswordCard />
                            <PreferencesCard />
                            
                            {/* Tombol Simpan Utama */}
                            <div className="flex justify-end gap-3">
                                <button type="button" className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-6 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                                    Batal
                                </button>
                                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                                    Simpan Semua Perubahan
                                </button>
                            </div>
                        </form>

                        {/* Zona Berbahaya diletakkan di luar form utama */}
                        <AccountActionsCard />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilePage;