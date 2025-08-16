import React, { useState } from 'react';

import DropdownProfile from '../components/DropdownProfile'; 
import ThemeToggle from '../components/ThemeToggle';

function Header({
  sidebarOpen,
  setSidebarOpen,
}) {

  return (
    // === PERUBAHAN GAYA HEADER ===
    // Mengganti background solid dengan background kaca yang transparan
    // dan menyesuaikan border agar cocok dengan tema
    <header className="sticky top-0 z-30 bg-black/40 border-b border-white/10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Sisi Kiri */}
          <div className="flex">
            {/* Tombol Hamburger */}
            <button
              // Mengubah warna ikon hamburger agar terlihat di background gelap
              className="text-gray-300 hover:text-white lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Sisi Kanan */}
          <div className="flex items-center space-x-3">
            
            <ThemeToggle />
            
            {/* Pembatas */}
            {/* Mengubah warna pembatas agar cocok dengan tema kaca */}
            <hr className="w-px h-6 bg-white/20 border-none" />
            
            <DropdownProfile align="right" />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
