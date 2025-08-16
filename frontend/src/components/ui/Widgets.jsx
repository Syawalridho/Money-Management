import React from 'react';

const Widget = ({ title, children, gridSpan = 'lg:col-span-1' }) => {
  return (
    <div className={`flex flex-col ${gridSpan}`}>
      {/* Bagian Judul yang Solid */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-t border-x border-white/10 rounded-t-xl px-5 py-3">
        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
          {title}
        </h3>
      </div>
      
      {/* Bagian Konten dengan Efek Kaca Gelap */}
      <div className="bg-black/40 backdrop-blur-2xl border-b border-x border-white/10 rounded-b-xl p-6 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Widget;
