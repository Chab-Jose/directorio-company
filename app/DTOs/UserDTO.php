<?php

namespace App\DTOs;

use Illuminate\Http\Request;

class UserDTO
{

    public function __construct(
        public string $name,
        public string $email,
        public string $password,
        public int $role_id,
        public bool $is_activo
    ) {

    }

     public static function fromRequest(Request $request): self {
        return new self(
            $request->input('name'),
            $request->input('email'),
            $request->input('password'),
            $request->input('roleId'),
            $request->input('userActivo'),
        );
    }

}
