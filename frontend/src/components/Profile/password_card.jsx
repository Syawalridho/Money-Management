import React from 'react';

const PasswordCard = () => {
    
    const handleResetPassword = () => {
        // Nanti di sini Anda bisa menambahkan logika untuk
        // membuka modal atau mengarahkan ke halaman reset password.
        console.log('Memulai alur reset password...');
        alert('Fitur reset password akan mengirimkan link ke email Anda.');
    };

    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Keamanan Akun</h3>
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Kiri: Label dan Input (disabled) */}
                    <div className="w-full md:w-1/2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            disabled 
                            value="••••••••••" 
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700/50 shadow-sm cursor-not-allowed p-1.5 pl-3" 
                        />
                    </div>

                    {/* Kanan: Tombol Aksi */}
                    <div className="w-full md:w-auto mt-2 md:mt-0 self-end">
                        <button 
                            type="button" 
                            onClick={handleResetPassword}
                            className="w-full md:w-auto rounded-md border border-gray-300 dark:border-red-600 bg-white dark:bg-gray-800 py-2 px-4 text-sm font-medium text-gray-700 dark:text-red-500 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                            Ubah Password
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PasswordCard;