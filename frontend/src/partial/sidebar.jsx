import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// --- DEFINISI IKON (TIDAK BERUBAH) ---
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const TransactionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const ReportsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;


// --- KOMPONEN TOMBOL KACA JERNIH (CLEAR GLASS) ---
const GlassSidebarButton = ({ to, onClick, icon, text, variant = 'default' }) => {
    const location = useLocation();
    const isActive = to && location.pathname.startsWith(to);

    // === PERUBAHAN GAYA TOMBOL ===
    // Menggunakan latar belakang yang sangat transparan dengan border untuk definisi
    const baseClasses = "group relative flex items-center gap-4 w-full px-4 py-3 rounded-xl overflow-hidden transition-all duration-300 ease-in-out border";
    
    // Gaya untuk tombol aktif: Latar biru transparan
    const activeClasses = "bg-blue-500/30 text-white border-blue-400/50";
    // Gaya untuk tombol tidak aktif: Nyaris transparan, border lebih terlihat saat hover
    const inactiveClasses = "bg-white/5 border-transparent text-gray-300 hover:bg-white/10 hover:border-white/20";
    // Gaya untuk tombol logout
    const dangerClasses = "bg-white/5 border-transparent text-gray-300 hover:bg-red-500/30 hover:border-red-400/40";

    const getVariantClass = () => {
        if (variant === 'danger') return dangerClasses;
        if (isActive) return activeClasses;
        return inactiveClasses;
    };

    const content = (
        <>
            {/* Efek pantulan cahaya dibuat lebih lembut */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-0 ease-in-out" />
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{icon}</span>
            <span className="relative z-10 font-semibold transition-transform duration-300 group-hover:scale-105">{text}</span>
        </>
    );

    if (to) {
        return <NavLink to={to} className={`${baseClasses} ${getVariantClass()}`}>{content}</NavLink>;
    }
    return <button onClick={onClick} className={`${baseClasses} ${getVariantClass()}`}>{content}</button>;
};


// --- KOMPONEN SIDEBAR UTAMA ---
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const { logout } = useAuth();
    const menuItems = [
        { to: '/dashboard', icon: <DashboardIcon />, text: 'Dashboard' },
        { to: '/transactions', icon: <TransactionIcon />, text: 'Transactions' },
        { to: '/budgeting', icon: <TransactionIcon />, text: 'Budgeting' },
        { to: '/goals', icon: <TransactionIcon />, text: 'Goals' },
        { to: '/calendar', icon: <TransactionIcon />, text: 'Calendar' },
        { to: '/report', icon: <ReportsIcon />, text: 'Reports' },
    ];
    const settingsItems = [{ to: '/profile', icon: <SettingsIcon />, text: 'Settings' }];

    return (
        // === PERUBAHAN GAYA SIDEBAR ===
        // Latar belakang dibuat lebih gelap dan tanpa blur agar tombol 'clear' lebih menonjol
        <aside className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col overflow-y-hidden 
                           bg-black/40 border-r border-white/10 
                           duration-300 ease-linear lg:static lg:translate-x-0 
                           ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            
            <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
                <NavLink to="/dashboard" className="text-2xl font-bold text-white">MNYY</NavLink>
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                </button>
            </div>

            <nav className="flex flex-col flex-grow justify-between px-4 py-4">
                <ul className="space-y-4">
                    {menuItems.map((item, index) => <li key={index}><GlassSidebarButton {...item} /></li>)}
                </ul>
                <ul className="space-y-2">
                     {settingsItems.map((item, index) => <li key={index}><GlassSidebarButton {...item} /></li>)}
                    <li><GlassSidebarButton onClick={logout} icon={<LogoutIcon />} text="Logout" variant="danger"/></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
