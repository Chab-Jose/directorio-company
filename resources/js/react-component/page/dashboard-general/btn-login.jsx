import { Link } from "react-router";


function BtnLogin(route) {
    return (
        <Link to="/login">
            <button
                className="py-2 px-3 text-sm font-bold rounded-sm border border-dark
                hover:text-indigo-900 hover:border-indigo-900 focus:bg-gray-300 focus:border-none"
            >
                <span>
                    Iniciar sesión
                </span>
            </button>
        </Link>
    )
}

export default BtnLogin;
