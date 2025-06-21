import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

function BtnCreate({ path = '#', name = 'AGREGAR', }) {
  return (
    <Link
      className='w-40 bg-indigo-500 hover:bg-fuchsia-500 p-4 text-white font-bold rounded-lg shadow-md
      transition duration-300 ease-in-out flex items-center justify-center'
      to={path}
    >
        <IoIosAddCircle />
        {name}
    </Link>
  );
}
export default BtnCreate;
