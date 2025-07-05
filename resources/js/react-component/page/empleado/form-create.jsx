import TitleSingle from "../../components/elements/title-single";
import Card from "../../components/form-layout/card";
import { CheckControl } from "../../components/form-layout/check-control";
import {InputForm, RowForm } from "../../components/form-layout/input-control";
import SelectControl from "../../components/form-layout/select-control";
import TextAreaControl from "../../components/form-layout/textarea-control";
import { useState } from "react";


function DatosEmpleado() {
  return (
    <div>
            <RowForm>
                <InputForm label="No. de empleado" type="text" id="noEmpleado" />
                <div className="w-1/2"></div>
            </RowForm>
            <RowForm>
                <InputForm label="Nombre(s)" type="text" id="nombre" />
                <InputForm label="Primer apellido" type="text" id="primerApellido" />
                <InputForm label="Segundo apellido" type="text" id="segundoApellido" />
            </RowForm>
             <RowForm>
                <SelectControl
                    label="Subsidiaria"
                    id="subsidiaria"
                    options={[
                        { value: "Empresa 1", label: "Ventas" },
                        { value: "Empresa 2", label: "Marketing" },
                        { value: "Empresa 3", label: "Desarrollo" },
                    ]}
                />
                <SelectControl
                    label="Departamento"
                    id="departamento"
                    options={[
                        { value: "ventas", label: "Ventas" },
                        { value: "marketing", label: "Marketing" },
                        { value: "desarrollo", label: "Desarrollo" },
                    ]}
                />
            </RowForm>
            <RowForm>
                <div className="w-3/4"></div>
                <CheckControl
                    label="¿El empleado es activo?"
                    id="isActive"
                    checked={true}
                    onChange={() => {}}
                />
            </RowForm>
        </div>
  )
}

function ContactosEmpleado() {
  return (
    <div>
      <RowForm>
        <InputForm label="Correo Electrónico" type="email" id="email" />
        <div className="w-1/2"></div>
      </RowForm>
      <RowForm>
        <InputForm label="Teléfono" type="text" id="telefonoContacto" />
        <InputForm label="Extensión" type="text" id="extensionContacto" />
      </RowForm>
      <RowForm>
        <TextAreaControl
          label="Dirección"
          id="direccion"
          placeholder={"Escriba aquí..."}
          onChange={() => {}}
        />
      </RowForm>
    </div>
  );
}

function UserEmpleado() {
  return (
    <div>
      <RowForm>
        <InputForm label="Usuario" type="text" id="usuario" />
      </RowForm>
      <RowForm>
        <InputForm label="Contraseña" type="password" id="contrasena" />
        <InputForm
          label="Confirmar contraseña"
          type="password"
          id="confirmarContrasena"
        />
      </RowForm>
      <RowForm>
        <SelectControl
          label="Rol"
          id="rol"
          options={[
            { value: "admin", label: "Administrador" },
            { value: "user", label: "Usuario" },
          ]}
        />
      </RowForm>
        <RowForm>
            <CheckControl
                label="¿Permitir acceso a la plataforma?"
                id="allowAccess"
                checked={true}
                onChange={() => {}}
            />
        </RowForm>
    </div>
  );
}

function FormCreateEmpleado() {

    const [activeTab, setActiveTab] = useState(0);

     const tabs = [
        { id: 'personal', label: 'Datos del empleado' },
        { id: 'contacto', label: 'Información de Contacto' },
        { id: 'cuenta', label: 'Cuenta' }
    ];

    const handleNext = () => {
        if (activeTab < tabs.length - 1) setActiveTab(prev => prev + 1);
    };

    const handleBack = () => {
        if (activeTab > 0) setActiveTab( prev => prev - 1);
    };

    return (
    <div className="container flex flex-col justify-center">
      <TitleSingle title="Crear empleado" />

      <Card>
        <div className="flex border-b mb-4">
            {tabs.map((tab, index) => (
            <span
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium ${
                    activeTab === index
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-500 hover:text-indigo-500'
                }`}
            >
                {tab.label}
            </span>
            ))}
        </div>
        <form  onSubmit={(e) => e.preventDefault()} >
            {activeTab === 0 && <DatosEmpleado />}
            {activeTab === 1 && <ContactosEmpleado />}
            {activeTab === 2 && <UserEmpleado />}

            <div className="flex justify-between pt-4">
                <button
                    type="button"
                    onClick={handleBack}
                    disabled={activeTab === 0}
                    className={`px-4 py-2 rounded ${
                    activeTab === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 text-white'
                    }`}
                >
                    Anterior
                </button>

                {activeTab < tabs.length - 1 ? (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                        >
                        Siguiente
                    </button>
                ) : (
                    <button
                    // type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                    Guardar
                    </button>
                )}
            </div>
        </form>
      </Card>
    </div>
  );
}

export default FormCreateEmpleado;
