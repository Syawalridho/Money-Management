import React, { useState } from 'react';

import DropdownProfile from '../components/DropdownProfile'; 
import ThemeToggle from '../components/ThemeToggle'; // <-- 1. Impor komponen baru

// Hapus definisi placeholder const ThemeToggle = ...

function Header({
  sidebarOpen,
  setSidebarOpen,
}) {
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-gray-200 dark:border-gray-700/60 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
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

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            
            {/* 2. Gunakan komponen ThemeToggle di sini */}
            <ThemeToggle />
            
            {/* Pembatas */}
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" />
            
            <DropdownProfile align="right" />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;