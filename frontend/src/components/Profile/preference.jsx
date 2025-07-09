import React from 'react';

const PreferencesCard = () => {
    return (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Preferensi</h3>
            <div className="mt-6">
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mata Uang Default</label>
                <select id="currency" name="currency" className="mt-1 block w-full max-w-xs rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-2 px-3 shadow-sm">
                    <option>IDR - Rupiah Indonesia</option>
                    <option>USD - Dolar Amerika Serikat</option>
                    <option>EUR - Euro</option>
                </select>
            </div>
        </div>
    );
};

export default PreferencesCard;