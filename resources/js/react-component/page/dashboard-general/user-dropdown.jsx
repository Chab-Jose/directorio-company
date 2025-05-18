import {useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function ItemMenu({description, icon}){
    return(
        <>
            <a
                href="#"
                className="flex justify-between items-center p-4  text-xs font-bold text-gray-700 hover:bg-gray-100 hover:text-indigo-900"
                role="menuitem"
            >
                <p>
                    {description}
                </p>
                <span>
                    {icon}
                </span>
            </a>
        </>
    )
}

function MenuOption(){
    return(
        <>
             <div
                    className="absolute right-0 z-10 mt-2 w-54 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        <ItemMenu
                            description = {"Cambiar contraseña"}
                            icon = {<RiLockPasswordFill />}
                        />
                        <form method="POST" action="#" role="none">
                            <button
                                type="submit"
                                className="flex justify-between items-center p-4 w-full text-xs font-bold
                                text-gray-700 hover:bg-gray-100 hover:text-indigo-900"
                                role="menuitem"
                            >
                                <p>
                                    Cerrar sesión
                                </p>
                                <span>
                                    <MdLogout />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
        </>
    )
}


function UserDropdown(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left min-w-60">
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900
                    ring-1 ring-inset hover:bg-gray-50 hover:ring-indigo-900 hover:text-indigo-900"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    <p>
                        Bienvenido: Nombre de usuario
                    </p>
                    <span>
                        <RiArrowDropDownLine />
                    </span>
                </button>
            </div>

            {isOpen &&  <MenuOption />}
        </div>
    );
}

export default UserDropdown;
