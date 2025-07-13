import TitleSingle from "../../components/elements/title-single";
import Card from "../../components/form-layout/card";
import {InputForm, RowForm } from "../../components/form-layout/input-control";
import TextAreaControl from "../../components/form-layout/textarea-control";
import { useState } from "react";
import TableSimple from "../../components/table-general/table-simple";

function DatosPermiso() {
  return (
    <div>
            <RowForm>
                <InputForm label="Codigo" type="text" id="codigo" />
                <InputForm label="Nombre" type="text" id="nombre" />

            </RowForm>
            <RowForm>
                <TextAreaControl
                    label="Descripcion"
                    id="descripcion"
                    placeholder={"Escriba aquí..."}
                    onChange={() => {}}
                />
                <div className="flex justify-center align-center text-sm m-3">
                    <button className="bg-white border-2 border-sky-400 text-sky-400 px-4 py-2 w-60 h-10 rounded hover:bg-sky-50">
                        Agregar
                    </button>
                </div>
            </RowForm>
        </div>
  )
}

function FormCreatePermiso() {

    return (
    <div className="container flex flex-col justify-center">
      <TitleSingle title="Crear subsidiaria" />

      <Card>
        <form  onSubmit={(e) => e.preventDefault()} >
            <DatosPermiso />
            <TableSimple />
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

export default FormCreatePermiso;
