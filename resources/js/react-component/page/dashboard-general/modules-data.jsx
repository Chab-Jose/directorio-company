import { RiContactsBook3Fill } from "react-icons/ri";
import { FaUsers, FaHouseUser, FaBuilding } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";
import { TbLockShare } from "react-icons/tb";


 export const modules = [
    {
        id: 1,
        name: 'Directorio',
        url: '/',
        icon : <RiContactsBook3Fill />
    },
    {
        id: 2,
        name: 'Empleados',
        url: '/empleado',
        icon: <FaUsers />
    },
    {
        id: 3,
        name: 'Departamentos',
        url: '/departamento',
        icon: <LuNetwork />
    },
    {
        id: 4,
        name: 'Subsidiarias',
        url: '/subsidiaria',
        icon: <FaBuilding />
    },
    {
        id: 5,
        name: 'Roles',
        url: 'rol',
        icon: <FaHouseUser/>
    },
    {
        id: 6,
        name: 'Permisos',
        url: 'permiso',
        icon: <TbLockShare />
    }
];
