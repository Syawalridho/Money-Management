import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Panggil hook logout dari context

// Definisi Ikon (tetap sama)
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const TransactionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const ReportsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const { logout } = useAuth();

    // Fungsi NavLink className yang sudah diperbarui
    const getNavLinkClass = ({ isActive }) => {
        const baseClasses = "flex items-center gap-3 rounded-md px-4 py-3 font-medium transition-colors duration-200";
        const activeClasses = "bg-blue-600 text-white";
        // PERUBAHAN DI SINI: Gaya hover untuk link yang tidak aktif
        const inactiveClasses = "text-gray-400 hover:bg-gray-700 hover:text-white";
        
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    };

    return (
        <aside className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-gray-800 text-white duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
                <NavLink to="/dashboard" className="text-2xl font-bold text-white">
                    MNYY
                </NavLink>
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                </button>
            </div>
            <nav className="flex flex-col flex-grow justify-between px-4 py-4">
                <ul className="space-y-2">
                    <li><NavLink to="/dashboard" className={getNavLinkClass}><DashboardIcon /> Dashboard</NavLink></li>
                    <li><NavLink to="/transactions" className={getNavLinkClass}><TransactionIcon /> Transactions</NavLink></li>
                    <li><NavLink to="/report" className={getNavLinkClass}><ReportsIcon /> Reports</NavLink></li>
                </ul>
                <ul className="space-y-2">
                    <li><NavLink to="/profile" className={getNavLinkClass}><SettingsIcon /> Settings</NavLink></li>
                    <li>
                        <button 
                            onClick={logout} 
                            // PERUBAHAN DI SINI: Menambahkan cursor-pointer dan memastikan kelas hover ada
                            className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-gray-400 transition-colors duration-200 cursor-pointer hover:bg-red-600 hover:text-white"> 
                            <LogoutIcon /> Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;