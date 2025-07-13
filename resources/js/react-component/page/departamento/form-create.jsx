import TitleSingle from "../../components/elements/title-single";
import Card from "../../components/form-layout/card";
import { CheckControl } from "../../components/form-layout/check-control";
import {InputForm, RowForm } from "../../components/form-layout/input-control";
import SelectControl from "../../components/form-layout/select-control";
import TextAreaControl from "../../components/form-layout/textarea-control";
import { useState } from "react";


function DatosDepartamento() {
  return (
    <div>
            <RowForm>
                <InputForm label="Nombre del puesto" type="text" id="nombrePuesto" />
            </RowForm>
            <RowForm>
                <InputForm label="Codigo del puesto" type="text" id="codigoPuesto" />
                <SelectControl
                    label="Subsidiaria"
                    id="subsidiaria"
                    options={[
                        { value: "Empresa 1", label: "Ventas" },
                        { value: "Empresa 2", label: "Marketing" },
                        { value: "Empresa 3", label: "Desarrollo" },
                    ]}
                />
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
                <div className="w-3/4"></div>
                <CheckControl
                    label="¿El puesto esta activo?"
                    id="isActive"
                    checked={true}
                    onChange={() => {}}
                />
            </RowForm>
        </div>
  )
}

function FormCreateDepartamento() {

    return (
    <div className="container flex flex-col justify-center">
      <TitleSingle title="Crear departamento" />

      <Card>
        <form  onSubmit={(e) => e.preventDefault()} >
            <DatosDepartamento />
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

export default FormCreateDepartamento;
