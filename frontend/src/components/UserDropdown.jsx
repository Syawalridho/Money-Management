// src/components/DropdownProfile.jsx (atau nama file dropdown Anda)

import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // <-- Pastikan ini diimpor

function DropdownProfile({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth(); // <-- Ambil 'user' dan 'logout' dari context

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // Menutup dropdown saat diklik di luar
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150" width="32" height="32" alt="User" />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white">
            {/* GANTI BAGIAN INI */}
            {user ? user.username : 'Guest'} 
          </span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4 1.4 1.4z" />
          </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div
          ref={dropdown}
          className="origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-[#182235] border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1"
          style={{ right: align === 'right' ? 0 : 'auto', left: align !== 'right' ? 0 : 'auto' }}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200 dark:border-gray-700/60">
            <div className="font-medium text-gray-800 dark:text-gray-100">
              {/* GANTI BAGIAN INI */}
              {user ? user.username : 'Guest'}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 italic">
              {/* ASUMSI ADA 'role' DI DATA USER ANDA */}
              {user ? user.role : 'User'}
            </div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                to="/profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                className="font-medium text-sm text-red-500 hover:text-red-600 w-full text-left flex items-center py-1 px-3"
                onClick={() => {
                  setDropdownOpen(false);
                  logout(); // Panggil fungsi logout dari context
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownProfile;