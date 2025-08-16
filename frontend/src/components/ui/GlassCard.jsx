import React from 'react';

/**
 * Komponen GlassCard dengan gaya terinspirasi iCloud yang disempurnakan.
 * Memiliki header dengan latar belakang kaca yang lebih solid, area konten yang lebih transparan,
 * dan bayangan kustom di sisi kiri-bawah.
 *
 * @param {string} title - Judul yang akan ditampilkan di header kartu.
 * @param {React.ReactNode} children - Konten yang akan ditampilkan di dalam kartu.
 * @param {string} [className=''] - Kelas CSS tambahan untuk kustomisasi.
 */
const GlassCard = ({ title, children, className = '' }) => {
  return (
    // === PERUBAHAN DIMULAI DI SINI ===
    // Mengganti 'shadow-lg' dengan shadow kustom menggunakan arbitrary values dari Tailwind.
    // Shadow ini memiliki offset -8px di sumbu X (kiri) dan 8px di sumbu Y (bawah),
    // dengan blur 25px dan warna hitam dengan opasitas 25%.
    <div 
      className={`backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[8px_8px_25px_rgba(0,0,0,0.45)] ${className}`}
    >
    {/* === PERUBAHAN SELESAI DI SINI === */}

      {/* Header Kartu dengan latar belakang yang lebih pekat */}
      <div className="bg-black/40 px-6 py-4 border-b border-white/10">
        <h3 className="font-bold text-lg text-white tracking-wide">
          {title}
        </h3>
      </div>
      
      {/* Konten Kartu dengan latar belakang yang lebih transparan */}
      <div className="bg-black/20 p-6 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
