
import React from "react";
import Dashboard from "./react-component/page/dashboard-general/dashboard";
import Login from "./react-component/page/login";
import TableDirectory from './react-component/page/directorio/list-directory';
import TableEmploye from './react-component/page/empleado/list-employe';
import TableDepartment from "./react-component/page/departamento/list-department";
import TableSubsidiary from "./react-component/page/subsidiaria/list-subsidiary";
import TableRol from "./react-component/page/rol/list-rol";
import TablePermission from "./react-component/page/permiso/list-permission";
import { Routes, Route } from "react-router";
import FormCreateEmpleado from "./react-component/page/empleado/form-create";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<TableDirectory />} /> {/* Ruta base "/" */}
                <Route path="directorio" element={<TableDirectory />} />
                <Route path="empleado" element={<TableEmploye />} />
                <Route path="empleado/crear" element={<FormCreateEmpleado />} />
                <Route path="departamento" element={<TableDepartment />} />
                <Route path="subsidiaria" element={<TableSubsidiary />} />
                <Route path="rol" element={<TableRol />} />
                <Route path="permiso" element={<TablePermission />} />

            </Route>
            <Route path="/login" element={<Login />}/>
        </Routes>
    );
}


