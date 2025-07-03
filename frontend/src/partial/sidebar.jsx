import React from 'react';
import { useNavigate } from 'react-router-dom';

// Ikon-ikon bisa didefinisikan di sini atau diimpor dari file terpisah
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const TransactionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const AnalyticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logout berhasil');
        navigate('/login');
    };

    return (
        <aside className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-gray-800 text-white duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
                <a href="/dashboard" className="text-2xl font-bold text-white">
                    MNYY
                </a>
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                </button>
            </div>
            <nav className="flex flex-col flex-grow justify-between px-4 py-4">
                <ul className="space-y-2">
                    <li><a href="#" className="flex items-center gap-3 rounded-md px-4 py-3 text-white bg-blue-600 font-medium"><DashboardIcon /> Dashboard</a></li>
                    <li><a href="/transactions" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"><TransactionIcon /> Transactions</a></li>
                    <li><a href="#" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"><AnalyticsIcon /> Analytics</a></li>
                </ul>
                <ul className="space-y-2">
                    <li><a href="#" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"><SettingsIcon /> Settings</a></li>
                    <li><button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"><LogoutIcon /> Logout</button></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
