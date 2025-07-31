import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const DateView = ({ onBack, onSaveDate }) => {
    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <button onClick={onBack} className="p-2 -ml-2 text-gray-500 hover:text-gray-800 dark:hover:text-white">
                    <FiChevronLeft size={24}/>
                </button>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tanggal & Waktu</h3>
                <button onClick={onSaveDate} className="font-semibold text-blue-600">Simpan</button>
            </div>

            {/* Konten */}
            <div className="p-6">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="date-input" className="text-sm font-medium text-gray-500 dark:text-gray-400">Tanggal</label>
                        <input 
                            type="date"
                            id="date-input"
                            defaultValue={new Date().toISOString().split('T')[0]} // Set default ke hari ini
                            className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg"
                        />
                    </div>
                     <div>
                        <label htmlFor="time-input" className="text-sm font-medium text-gray-500 dark:text-gray-400">Waktu</label>
                        <input 
                            type="time"
                            id="time-input"
                            defaultValue={new Date().toTimeString().substring(0, 5)} // Set default ke waktu sekarang
                            className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateView;