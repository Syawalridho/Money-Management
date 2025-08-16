import React from 'react';

/**
 * Komponen GlassCard dengan dua mode:
 * - Dengan title: ada header (bg-black/40) + body (bg-black/20).
 * - Tanpa title: hanya body transparan (kaca bening, tanpa header).
 */
const GlassCard = ({ title, children, className = '' }) => {
  return (
    <div
      className={`backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[8px_8px_25px_rgba(0,0,0,0.45)] ${className}`}
    >
      {title ? (
        <>
          {/* Header Kartu */}
          <div className="bg-black/40 px-6 py-4 border-b border-white/10">
            <h3 className="font-bold text-lg text-white tracking-wide">
              {title}
            </h3>
          </div>
          {/* Body Kartu */}
          <div className="bg-black/15 p-6 h-full">{children}</div>
        </>
      ) : (
        /* Mode tanpa judul → kaca bening */
        <div className="bg-black/15 p-6 h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default GlassCard;
