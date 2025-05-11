import React, { useState } from 'react';
import Sidebar from './sidebar';
import { MdMenu } from "react-icons/md";


function Dashboard() {
    const [activeTab, setActiveTab] = useState('home');
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
            <Sidebar
                open = {openMenu}
                setOpen={setOpenMenu}
            />

        {/* Main */}
        <main className="flex-1 p-6">
            {/* NavTabs */}
            <div className="mb-6 border-b border-gray-300">
            <nav className="flex space-x-4">
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="py-2 px-4 font-medium  font-bold rounded-full focus:bg-gray-300"
                >
                    <span>
                        <MdMenu />
                    </span>
                </button>
                {['home', 'profile', 'settings'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-4 font-medium border-b-2 ${
                    activeTab === tab
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-indigo-600'
                    }`}
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
                ))}
            </nav>
            </div>

            {/* Content */}
            <div className="bg-white shadow rounded p-4">

            {activeTab === 'home' && <div>Contenido del Dashboard</div>}
            {activeTab === 'profile' && <div>Perfil del usuario</div>}
            {activeTab === 'settings' && <div>Configuración del sistema</div>}
            </div>
        </main>
        </div>
    );
};

export default Dashboard;

