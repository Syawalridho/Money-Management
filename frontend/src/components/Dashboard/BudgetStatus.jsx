import React from 'react';

const BudgetStatus = () => (
    <div className="rounded-xl border border-gray-200 bg-white p-6 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-gray-400 mb-4">Batas Anggaran</h3>
        <ul className="space-y-4">
            <li>
                <p className="flex justify-between text-sm"><span className="font-medium text-gray-600">Makanan & Minuman</span><span className='text-gray-500'>Rp750.000 / Rp1.500.000</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1"><div className="bg-blue-600 h-2.5 rounded-full" style={{width: '50%'}}></div></div>
            </li>
            <li>
                <p className="flex justify-between text-sm"><span className="font-medium text-gray-600">Transportasi</span><span className='text-gray-500'>Rp400.000 / Rp500.000</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1"><div className="bg-orange-500 h-2.5 rounded-full" style={{width: '80%'}}></div></div>
            </li>
            <li>
                <p className="flex justify-between text-sm"><span className="font-medium text-gray-600">Hiburan</span><span className='text-gray-500'>Rp650.000 / Rp600.000</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1"><div className="bg-red-500 h-2.5 rounded-full" style={{width: '100%'}}></div></div>
            </li>
        </ul>
    </div>
);

export default BudgetStatus;
