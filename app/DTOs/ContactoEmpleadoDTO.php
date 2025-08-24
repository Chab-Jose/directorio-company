<?php
namespace App\DTOs;

use Illuminate\Http\Request;

class ContactoEmpleadoDTO
{
    public function __construct(
        public string $email,
        public string $telefono,
        public string $extension,
        public string $direccion,
        public ?int $empleadoId
    ) {
    }

    public static function fromRequest(Request $request): self {
        return new self(
            $request->input('email'),
            $request->input('telephone'),
            $request->input('extension'),
            $request->input('address'),
            $request->input('empleadoId')
        );
    }

}
