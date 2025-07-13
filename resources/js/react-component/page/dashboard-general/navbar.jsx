import React from "react";
import BtnLogin from './btn-login';
import { MdMenu } from "react-icons/md";
import { Link, Outlet } from "react-router";

function Navbar({open, setOpen}){
    return(
        <>
           {/* Navbar fijo arriba */}
                <div className="flex items-center justify-between px-6 py-4 z-10">
                    <div className='flex items-center space-x-4'>
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-lg font-bold rounded-full hover:text-indigo-900 focus:bg-gray-300"
                        >
                            <MdMenu />
                        </button>
                        <Link
                            to="/"
                            className="text-lg font-bold hover:text-indigo-900"
                        >
                            Directorio virtual
                        </Link>
                    </div>
                    <div className='hidden md:flex items-center'>
                        {/* <UserDropdown /> */}
                        <BtnLogin route="/login" />
                    </div>
                </div>
        </>
    )
}

export default Navbar;
