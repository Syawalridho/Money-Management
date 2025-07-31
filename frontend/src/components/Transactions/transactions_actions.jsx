import React from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';

const TransactionActions = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Filters */}
            <div className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg bg-white text-gray-400 dark:bg-gray-800 dark:border-gray-700">
                        <span>All Types</span> <ChevronDown size={16} />
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg bg-white text-gray-400 dark:bg-gray-800 dark:border-gray-700">
                        <span>All Categories</span> <ChevronDown size={16} />
                    </button>
                    <button className="text-sm text-blue-600 dark:text-white hover:underline bg-whi">Clear Filters</button>
                </div>
            </div>

            {/* Action Button */}
            <button className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <Plus size={20} />
                <span>New Transaction</span>
            </button>
        </div>
    );
};

export default TransactionActions;