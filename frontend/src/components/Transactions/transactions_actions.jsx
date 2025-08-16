import React from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import GlassInner from '../ui/GlassInner';

const TransactionActions = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filters */}
            <div className="flex flex-1 flex-col md:flex-row gap-4">
                <GlassInner variant="plain" className="flex-1 p-2 relative">
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg text-white placeholder-white/60 
                                   focus:outline-none focus:ring-2 focus:ring-blue-400/50 
                                   bg-transparent"
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70" size={20} />
                </GlassInner>

                    <button className="flex items-center gap-2 text-white">
                        <span>All Types</span> <ChevronDown size={16} />
                    </button>

                    <button className="flex items-center gap-2 text-white">
                        <span>All Categories</span> <ChevronDown size={16} />
                    </button>

                    <button className="text-sm text-blue-300 hover:underline">Clear Filters</button>
            </div>

            {/* Action Button */}
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-600/80 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    <Plus size={20} />
                    <span>New Transaction</span>
                </button>
        </div>
    );
};

export default TransactionActions;
