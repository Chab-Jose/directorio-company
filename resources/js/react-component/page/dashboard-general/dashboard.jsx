import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Outlet } from "react-router";
import Navbar from './navbar';



function Dashboard() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <Sidebar open={openMenu} setOpen={setOpenMenu} />

            {/* Contenedor derecho (navbar + contenido) */}
            <div className="flex flex-col flex-1 h-full overflow-hidden">
                {/* Navbar fijo arriba */}
                <Navbar open={openMenu} setOpen={setOpenMenu} />

                {/* Main scrollable */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


export default Dashboard;

