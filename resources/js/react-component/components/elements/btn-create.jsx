import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

/**
 * Componente del titulo de la página con botón de crear
 * @param   {string|null} path - Ruta a la que redirige el botón
 * @param   {string|null} name - Nombre del botón
 * @returns
 */
function BtnCreate({path = '#', name = 'Agregar'}) {
  return (
    <Link
      className='min-w-16 bg-violet-700 hover:bg-violet-900 p-2 md:p-3 text-white font-bold rounded-lg shadow-md
      transition duration-300 ease-in-out flex items-center justify-center'
      to={path}
    >
        <IoIosAddCircle />
        <p className="ml-1 text-xs md:text-sm">{name}</p>
    </Link>
  );
}
export default BtnCreate;
