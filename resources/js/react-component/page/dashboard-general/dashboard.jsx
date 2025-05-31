import React, { useState } from 'react';
import Sidebar from './sidebar';
import UserDropdown from './user-dropdown';
import BtnLogin from './btn-login';
import { MdMenu } from "react-icons/md";
import TableMain from '../../components/table-general/table-main';


function Dashboard() {
    const [activeTab, setActiveTab] = useState('home');
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="md:flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar
                open = {openMenu}
                setOpen={setOpenMenu}
            />

            {/* Main */}
            <main className="flex-1 p-6">
                {/* NavTabs */}
                <div className="mb-6">
                    <nav className="flex justify-end space-x-4">
                        <div
                            className='w-full lg:w-1/2 flex justify-start'
                        >
                            <button
                                onClick={() => setOpenMenu(!openMenu)}
                                className="py-2 px-3 font-medium font-bold rounded-full hover:text-indigo-900 focus:bg-gray-300"
                            >
                                <span>
                                    <MdMenu />
                                </span>
                            </button>
                            <a
                                href="/"
                                className="py-2 px-3 ml-4 font-lg font-bold
                                rounded-sm hover:text-indigo-900
                                focus:bg-gray-300 focus:no-underline"
                            >
                                Directorio virtual
                            </a>
                        </div>
                        <div
                            className='hidden lg:w-1/2 flex justify-end md:flex'
                        >
                            {/* <UserDropdown /> */}
                            <BtnLogin route="/login" />
                        </div>
                    </nav>
                </div>

                {/* Content */}
                <div className="bg-white shadow rounded p-4 w-full mb-3">
                    Directorio
                </div>

                {/* Table*/}

                <TableMain />



            </main>
        </div>
    );
};

export default Dashboard;

