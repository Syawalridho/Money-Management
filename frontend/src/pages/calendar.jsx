import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Data simulasi transaksi untuk kalender
const transactionData = {
    '2025-08-05': { income: 50000, expense: 25000, details: [{id: 1, desc: 'Kopi Pagi', amount: -25000}] },
    '2025-08-10': { income: 0, expense: 150000, details: [{id: 2, desc: 'Isi Bensin', amount: -150000}] },
    '2025-08-15': { income: 1200000, expense: 450000, details: [{id: 3, desc: 'Proyek Freelance', amount: 1200000}, {id: 4, desc: 'Belanja Bulanan', amount: -450000}] },
    '2025-08-25': { income: 5500000, expense: 750000, details: [{id: 5, desc: 'Gaji Bulanan', amount: 5500000}, {id: 6, desc: 'Makan Malam', amount: -150000}, {id: 7, desc: 'Bayar Listrik', amount: -600000}] },
};

// Fungsi untuk format Rupiah
const formatRupiah = (number) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
}).format(number);

// Komponen Utama Calendar View
const CalendarView = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 1)); // Agustus 2025
    const [selectedDate, setSelectedDate] = useState('2025-08-15');

    const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const changeMonth = (offset) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const renderCells = () => {
        const cells = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            cells.push(<div key={`empty-${i}`} className="p-2"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const data = transactionData[dateStr];
            const isSelected = dateStr === selectedDate;

            cells.push(
                <div 
                    key={day} 
                    className={`p-2 border border-gray-700 rounded-lg cursor-pointer transition-colors h-28 flex flex-col justify-between ${isSelected ? 'bg-blue-600/30 border-blue-500' : 'hover:bg-gray-700/50'}`}
                    onClick={() => setSelectedDate(dateStr)}
                >
                    <div className="text-right font-medium text-white">{day}</div>
                    <div className="text-xs space-y-1">
                        {data?.income > 0 && <p className="text-green-400 truncate font-semibold">+ {formatRupiah(data.income)}</p>}
                        {data?.expense > 0 && <p className="text-red-400 truncate font-semibold">- {formatRupiah(data.expense)}</p>}
                    </div>
                </div>
            );
        }
        return cells;
    };

    const selectedTransactions = transactionData[selectedDate]?.details || [];

    return (
        <div className="p-4 md:p-6 2xl:p-10 bg-gray-900 min-h-screen">
             <h1 className="text-3xl font-bold text-white mb-6">Kalender Keuangan</h1>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                {/* Header Kalender */}
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-700"><FiChevronLeft size={24} className="text-white"/></button>
                    <h2 className="text-xl font-bold text-white">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                    <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-700"><FiChevronRight size={24} className="text-white"/></button>
                </div>

                {/* Grid Kalender */}
                <div className="grid grid-cols-7 gap-2">
                    {daysOfWeek.map(day => <div key={day} className="text-center font-semibold text-gray-400 text-sm py-2">{day}</div>)}
                    {renderCells()}
                </div>
            </div>
            
            {/* Detail Transaksi untuk Tanggal yang Dipilih */}
            <div className="mt-6">
                <h3 className="text-xl font-bold text-white">Detail Transaksi untuk {selectedDate}</h3>
                <div className="mt-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
                    {selectedTransactions.length > 0 ? (
                        <ul className="space-y-3">
                            {selectedTransactions.map(tx => (
                                <li key={tx.id} className="flex justify-between items-center">
                                    <span className="text-gray-300">{tx.desc}</span>
                                    <span className={`font-semibold ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {formatRupiah(tx.amount)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-400">Tidak ada transaksi pada tanggal ini.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarView;
