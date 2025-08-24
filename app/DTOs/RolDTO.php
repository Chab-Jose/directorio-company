<?php
namespace App\DTOs;

use Illuminate\Http\Request;

class RolDTO
{
    public function __construct(
        public string $nombre,
        public string $descripcion,
    ) {
    }

    public static function fromRequest(Request $request): self {
        return new self(
            $request->input('name'),
            $request->input('description')
        );
    }

}
