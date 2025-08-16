import React from 'react';

const BudgetStatus = () => (
    <div>
        <h3 className="font-semibold text-white mb-4">Batas Anggaran</h3>
        <ul className="space-y-4">
            <li>
                <p className="flex justify-between text-sm"><span className="font-medium text-gray-300">Makanan & Minuman</span><span className='text-gray-400'>Rp750.000 / Rp1.500.000</span></p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1"><div className="bg-blue-600 h-2.5 rounded-full" style={{width: '50%'}}></div></div>
            </li>
            <li>
                <p className="flex justify-between text-sm"><span className="font-medium text-gray-300">Transportasi</span><span className='text-gray-400'>Rp400.000 / Rp500.000</span></p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1"><div className="bg-orange-500 h-2.5 rounded-full" style={{width: '80%'}}></div></div>
            </li>
            <li>
                <p className="flex justify-between text-sm"><span className="font-medium text-gray-300">Hiburan</span><span className='text-gray-400'>Rp650.000 / Rp600.000</span></p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1"><div className="bg-red-500 h-2.5 rounded-full" style={{width: '100%'}}></div></div>
            </li>
        </ul>
    </div>
);

export default BudgetStatus;
