import React from 'react';
import { FiPlus } from 'react-icons/fi';

const FloatingActionButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Add new record"
        >
            <FiPlus size={28} />
        </button>
    );
};

export default FloatingActionButton;