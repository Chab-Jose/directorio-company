
import {modules}  from "./modules-data.jsx";
import { TbCircleLetterMFilled } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router";

function Sidebar({open, setOpen}) {

    const lstmodules = modules.map((module) => {
        return (
            <Link
                key={module.id}
                to={module.url}
                className="block text-slate-50 rounded-lg hover:text-slate-200 hover:bg-violet-800 hover:shadow-md"
            >
               <div
                    className="flex items-center p-2 text-sm font-bold rounded-lg"
                >
                    <span
                        className="icon-wrapper mr-2"
                    >
                            {module.icon}
                    </span>

                    {open && <p>{module.name}</p>}

                </div>
            </Link>
        )
    });

    return (
        <>
            {/* Overlay para cerrar en móvil */}
            <div
                className={`fixed inset-0 bg-black opacity-25 z-40 transition-opacity duration-300 lg:hidden ${
                open ? 'block' : 'hidden'
                }`}
                onClick={() => setOpen(false)}
            >
            </div>
            <aside
                className={` ${open ? 'translate-x-0 w-54' : '-translate-x-full w-16'}
                lg:translate-x-0 fixed lg:relative z-50 h-full
                bg-gradient-to-b from-violet-950 to-purple-900 shadow-md`}
            >
                <div
                    className="p-6 text-xl font-bold text-slate-50"
                >
                    {open ? <p>Mi Panel</p> : <span><TbCircleLetterMFilled /></span>}
                </div>
                <nav
                    className={`${open ? 'mt-3' : 'mt-1'} space-y-2 px-4`}
                >
                    {lstmodules}

                    <a
                        href='#'
                        className="block sm:hidden text-slate-50 rounded-lg hover:text-slate-300 hover:underline"
                    >
                    <div
                            className="flex items-center p-2 text-xs rounded-lg"
                        >
                            <span
                                className="icon-wrapper mr-2"
                            >
                                <MdLogout />
                            </span>
                            <p>
                                Cerrar sesión
                            </p>
                        </div>
                    </a>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar;
