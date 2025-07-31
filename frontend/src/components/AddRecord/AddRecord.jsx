import React, { useState, useEffect } from 'react';
import MainView from './MainView';
import CategoryView from './CategoryView';
import DateView from './DateView';

const AddRecord = ({ isOpen, onClose }) => {
    const [currentView, setCurrentView] = useState('main');
    const [recordType, setRecordType] = useState('expense');
    
    const [formData, setFormData] = useState({
        amount: '',
        account: 'Cash',
        category: 'Pilih Kategori',
        date: 'Hari Ini',
        time: new Date().toTimeString().substring(0, 5)
    });

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setCurrentView('main');
        }
    }, [isOpen]);

    const handleSelectCategory = (category) => {
        setFormData(prev => ({ ...prev, category }));
        setCurrentView('main');
    };

    const handleSaveDate = () => {
        setCurrentView('main');
    };

    if (!isOpen) return null;

    const bgColorClass = {
        expense: 'bg-red-500',
        income: 'bg-green-500',
    };

    // Fungsi ini akan menentukan view mana yang akan ditampilkan
    const renderContent = () => {
        switch (currentView) {
            case 'category':
                return <CategoryView onBack={() => setCurrentView('main')} onSelectCategory={handleSelectCategory} />;
            case 'date':
                return <DateView onBack={() => setCurrentView('main')} onSaveDate={handleSaveDate} />;
            default:
                return (
                    <MainView 
                        recordType={recordType}
                        setRecordType={setRecordType}
                        bgColorClass={bgColorClass[recordType]}
                        onClose={onClose}
                        formData={formData}
                        setFormData={setFormData}
                        onNavigate={setCurrentView}
                    />
                );
        }
    };

    return (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 shadow-xl m-4"
                onClick={e => e.stopPropagation()}
            >
                {/* PERUBAHAN UTAMA DI SINI: Panggil fungsi renderContent() */}
                {renderContent()}
            </div>
        </div>
    );
};

export default AddRecord;