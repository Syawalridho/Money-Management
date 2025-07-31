import React, { useState, useEffect } from 'react';
import { FiX, FiChevronRight, FiCalendar, FiTag, FiCreditCard, FiHelpCircle } from 'react-icons/fi';

// Komponen kecil untuk setiap baris di bagian General
// Dibuat interaktif dengan prop 'onClick'
const ListItem = ({ icon, label, value, required, onClick = () => {} }) => (
    <button 
        type="button" 
        onClick={onClick} 
        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
    >
        <div className="flex items-center gap-4">
            <div className="text-gray-500">{icon}</div>
            <span className="text-gray-800 dark:text-gray-200">{label}</span>
        </div>
        <div className="flex items-center gap-2">
            <span className={required ? "text-red-500" : "text-gray-500 dark:text-gray-400"}>
                {value}
            </span>
            <FiChevronRight className="text-gray-400"/>
        </div>
    </button>
);


const MainView = ({ 
    recordType, 
    setRecordType, 
    bgColorClass, 
    onClose, 
    formData, 
    setFormData,
    onNavigate // Fungsi untuk pindah view
}) => {
    // State lokal hanya untuk mengelola nilai input mentah
    const [amount, setAmount] = useState(formData.amount);

    // Handler untuk memastikan hanya angka yang bisa diinput
    const handleAmountChange = (e) => {
        const value = e.target.value;
        // Hapus semua karakter non-angka (seperti titik atau koma)
        const numericValue = value.replace(/[^0-9]/g, '');
        setAmount(numericValue);
    };
    
    // Update state utama di parent component saat state lokal berubah
    useEffect(() => {
        setFormData(prev => ({...prev, amount}));
    }, [amount, setFormData]);

    // Format angka dengan titik sebagai pemisah ribuan untuk ditampilkan
    const formattedAmount = new Intl.NumberFormat('id-ID').format(amount || 0);

    // Daftar tab yang tersedia (tanpa 'Transfer')
    const tabs = [
        { id: 'expense', label: 'Pengeluaran' },
        { id: 'income', label: 'Pemasukan' },
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-white"><FiX size={24}/></button>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tambah Data</h3>
                <button type="button" className="font-semibold text-blue-600">Simpan</button>
            </div>

            {/* Area Input Utama */}
            <div className={`p-6 text-white transition-colors duration-300 ${bgColorClass}`}>
                <p className="text-sm text-white/80">{recordType === 'expense' ? 'Jumlah Pengeluaran' : 'Jumlah Pemasukan'}</p>
                <div className="flex items-center">
                    <span className="text-3xl font-medium">Rp</span>
                    <input 
                        type="text" 
                        inputMode="numeric" // Membantu memunculkan keyboard angka di mobile
                        value={formattedAmount}
                        onChange={handleAmountChange}
                        className="w-full bg-transparent text-5xl font-bold text-right outline-none placeholder:text-white/50"
                        placeholder="0"
                    />
                </div>
            </div>
            
            {/* Pilihan Tipe */}
            <div className="p-2 bg-gray-100 dark:bg-gray-900 grid grid-cols-2 gap-2">
                {tabs.map(tab => (
                    <button 
                        key={tab.id}
                        type="button"
                        onClick={() => setRecordType(tab.id)}
                        className={`py-2 rounded-lg text-sm font-semibold transition-colors ${recordType === tab.id ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700/50'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Opsi General */}
            <div className="p-4 space-y-1">
                <ListItem icon={<FiCreditCard/>} label="Akun" value={formData.account} />
                <ListItem 
                    icon={<FiHelpCircle/>} 
                    label="Kategori" 
                    value={formData.category} 
                    required={formData.category === 'Pilih Kategori'}
                    onClick={() => onNavigate('category')} // Pindah ke view kategori
                />
                <ListItem 
                    icon={<FiCalendar/>} 
                    label="Tanggal & Waktu" 
                    value={`${formData.date}, ${formData.time}`}
                    onClick={() => onNavigate('date')} // Pindah ke view tanggal
                />
                <ListItem icon={<FiTag/>} label="Label" value="Tambah Label" />
            </div>
        </div>
    );
};

export default MainView;