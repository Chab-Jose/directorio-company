import React from "react";


function Navbar(){
    return(
        <>
            {/* NavTabs */}
            <div className="mb-6 border-b border-gray-300 bg-sky-50">
                <nav className="flex justify-end w-full space-x-4 bg-blue-500">
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className="py-2 px-4 font-medium  font-bold rounded-full focus:bg-gray-300"
                    >
                        <span>
                            <MdMenu />
                        </span>
                    </button>

                    <button
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
        </>
    )
}

export default Navbar;
