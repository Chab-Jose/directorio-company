import TitleSingle from "../../components/elements/title-single";
import Card from "../../components/form-layout/card";
import { CheckControl } from "../../components/form-layout/check-control";
import {InputForm, RowForm } from "../../components/form-layout/input-control";
import SelectControl from "../../components/form-layout/select-control";
import TextAreaControl from "../../components/form-layout/textarea-control";
import { useState } from "react";


function DatosSubsidiaria() {
  return (
    <div>
            <RowForm>
                <InputForm label="Nombre comercial" type="text" id="nombreComercial" />
                <InputForm label="Codigo de la subsidiaria" type="text" id="codigoSubsidiaria" />
            </RowForm>
            <RowForm>
                <InputForm label="Razon Social" type="text" id="razonSocial" />
            </RowForm>
            <RowForm>
                <InputForm label="RFC" type="text" id="rfc" />
                <SelectControl
                    label="Regimen Fiscal"
                    id="regimenFiscal"
                    options={[
                        { value: "Empresa 1", label: "Ventas" },
                        { value: "Empresa 2", label: "Marketing" },
                        { value: "Empresa 3", label: "Desarrollo" },
                    ]}
                />
                <InputForm label="Codigo Postal" type="text" id="codigoPostal" />
            </RowForm>
            <RowForm>
                <TextAreaControl
                label="Dirección"
                id="direccion"
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

function FormCreateSubsidiaria() {

    return (
    <div className="container flex flex-col justify-center">
      <TitleSingle title="Crear subsidiaria" />

      <Card>
        <form  onSubmit={(e) => e.preventDefault()} >
            <DatosSubsidiaria />
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

export default FormCreateSubsidiaria;
