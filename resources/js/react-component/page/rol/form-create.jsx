import TitleSingle from "../../components/elements/title-single";
import Card from "../../components/form-layout/card";
import {InputForm, RowForm } from "../../components/form-layout/input-control";
import TextAreaControl from "../../components/form-layout/textarea-control";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp  } from "react-icons/fa";

const permisosData = [
  {
    modulo: "Usuarios",
    permisos: [
      { id: 1, nombre: "Ver usuarios" },
      { id: 2, nombre: "Editar usuarios" },
    ],
  },
  {
    modulo: "Productos",
    permisos: [
      { id: 3, nombre: "Ver productos" },
      { id: 4, nombre: "Eliminar productos" },
    ],
  },
];

function PermisosAcordeon() {
  const [abiertos, setAbiertos] = useState({});
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleModulo = (modulo) => {
    setAbiertos((prev) => ({
      ...prev,
      [modulo]: !prev[modulo],
    }));
  };

  const togglePermiso = (permisoId) => {
    setSeleccionados((prev) =>
      prev.includes(permisoId)
        ? prev.filter((id) => id !== permisoId)
        : [...prev, permisoId]
    );
  };

  return (
    <>
    <label className="text-slate-400 mb-1 px-3">
            Permisos
    </label>
    <div className="w-full space-y-1 px-2">
      {permisosData.map((moduloItem, index) => (
        <div key={index} className="shadow-sm">
          {/* Cabecera del módulo */}
          <button
            onClick={() => toggleModulo(moduloItem.modulo)}
            className="w-full flex items-center justify-between p-2 bg-white text-slate-400 text-sm font-semibold"
          >
            <span>{moduloItem.modulo}</span>
            {abiertos[moduloItem.modulo] ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </button>

          {/* Permisos */}
          {abiertos[moduloItem.modulo] && (
            <div className="px-4 py-2 space-y-2 bg-white text-sm">
              {moduloItem.permisos.map((permiso) => (
                <label key={permiso.id} className="flex items-center gap-2 text-slate-400 hover:text-slate-600">
                  <input
                    type="checkbox"
                    checked={seleccionados.includes(permiso.id)}
                    onChange={() => togglePermiso(permiso.id)}
                    className="mr-2 accent-indigo-500 hover:accent-indigo-700"

                  />
                  {permiso.nombre}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}


function DatosRol() {
  return (
    <div>
            <RowForm>
                <InputForm label="Nombre" type="text" id="nombre" />
                <div className="w-1/3"></div>
            </RowForm>
            <RowForm>
                <TextAreaControl
                    label="Descripcion"
                    id="descripcion"
                    placeholder={"Escriba aquí..."}
                    onChange={() => {}}
                />
            </RowForm>
            <RowForm>
                <PermisosAcordeon></PermisosAcordeon>
            </RowForm>
        </div>
  )
}

function FormCreateRol() {

    return (
    <div className="container flex flex-col justify-center">
      <TitleSingle title="Crear subsidiaria" />

      <Card>
        <form  onSubmit={(e) => e.preventDefault()} >
            <DatosRol />
            <div className="flex justify-between pt-4">
                <button
                    type="button"
                    className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
                >
                    Anterior
                </button>
                    <button
                    // type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                    Guardar
                    </button>
            </div>
        </form>
      </Card>
    </div>
  );
}

export default FormCreateRol;
