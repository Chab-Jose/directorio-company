<?php

namespace App\DTOs;

use Illuminate\Http\Request;

class EmpleadoDTO
{


    public function __construct(
        public string $nombres,
        public string $no_empleado,
        public string $apellido_paterno,
        public string $apellido_materno,
        public int $subsidiaria_id,
        public int $puesto_id,
        public bool $is_activo
    ) {

    }

     public static function fromRequest(Request $request): self {
        return new self(
            $request->input('name'),
            $request->input('noEmployee'),
            $request->input('firstSurname'),
            $request->input('secondSurname'),
            $request->input('subsidiaryId'),
            $request->input('workstationId'),
            $request->input('employeeActive')
        );
    }

}

