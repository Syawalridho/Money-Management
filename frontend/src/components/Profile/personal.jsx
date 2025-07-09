import React from 'react';
import { useAuth } from '../../contexts/AuthContext'; // Sesuaikan path jika perlu

const PersonalInfoCard = () => {
    const { user } = useAuth();

    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Informasi Pribadi</h3>
            <div className="mt-6 space-y-6">
                {/* Foto Profil */}
                <div className="flex items-center gap-6">
                    <img className="h-20 w-20 rounded-full object-cover" src={user?.avatar || 'https://i.pravatar.cc/150'} alt="Current" />
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                        <span>Ganti Foto</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                </div>
                {/* Username & Email */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                        <input type="text" 
                                id="username" 
                                name="username" 
                                defaultValue={user?.username} 
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm p-1.5 pl-3" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input type="email" 
                                id="email" 
                                name="email" 
                                defaultValue={user?.email} 
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm p-1.5 pl-3" />
                    </div>
                </div>
                {/* Tanggal Lahir & Gender */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tanggal Lahir</label>
                        <input type="date" 
                                id="birthdate" 
                                name="birthdate" 
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm p-1.5 pl-3" />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
                        <select id="gender" 
                                name="gender" 
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-2 px-3 shadow-sm">
                            <option>Pria</option>
                            <option>Wanita</option>
                            <option>Lainnya</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoCard;