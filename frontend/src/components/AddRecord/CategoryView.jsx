import React from 'react';
import { FiChevronLeft, FiSearch, FiShoppingBag, FiTruck, FiHome, FiHeart } from 'react-icons/fi';

// Data Kategori (bisa diambil dari API nanti)
const categories = [
    { name: 'Makanan & Minuman', icon: <FiShoppingBag size={22}/>, color: 'bg-red-500' },
    { name: 'Belanja', icon: <FiShoppingBag size={22}/>, color: 'bg-blue-500' },
    { name: 'Transportasi', icon: <FiTruck size={22}/>, color: 'bg-yellow-500' },
    { name: 'Perumahan', icon: <FiHome size={22}/>, color: 'bg-purple-500' },
    { name: 'Kesehatan', icon: <FiHeart size={22}/>, color: 'bg-pink-500' },
];

const CategoryView = ({ onBack, onSelectCategory }) => {
    return (
        <div>
            {/* Header */}
            <div className="flex items-center p-4 border-b dark:border-gray-700">
                <button onClick={onBack} className="p-2 -ml-2 text-gray-500 hover:text-gray-800 dark:hover:text-white">
                    <FiChevronLeft size={24}/>
                </button>
                <h3 className="flex-1 text-center text-lg font-semibold text-gray-800 dark:text-white">Pilih Kategori</h3>
                <span className="w-8"></span> {/* Spacer */}
            </div>

            {/* Search Bar */}
            <div className="p-4">
                <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="text"
                        placeholder="Cari kategori..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-sm"
                    />
                </div>
            </div>

            {/* Daftar Kategori */}
            <ul className="px-2 pb-4 h-80 overflow-y-auto">
                {categories.map((cat) => (
                    <li key={cat.name}>
                        <button 
                            onClick={() => onSelectCategory(cat.name)}
                            className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${cat.color}`}>
                                {cat.icon}
                            </div>
                            <span className="text-gray-800 dark:text-gray-200">{cat.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryView;