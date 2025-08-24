<?php

namespace App\DTOs;

use Illuminate\Http\Request;

class SubsidiariaDTO
{


    public function __construct(
        public string $nombreComercial,
        public string $codigoSubsidiaria,
        public string $razonSocial,
        public string $rfc,
        public string $direccion,
        public string $codigoPostal,
        public int $regimenFiscal,
        public bool $isActivo
    ) {}

     public static function fromRequest(Request $request): self {
        return new self(
            $request->input('name'),
            $request->input('code'),
            $request->input('socialReason'),
            $request->input('rfc'),
            $request->input('address'),
            $request->input('postalCode'),
            $request->input('taxRegime'),
            $request->input('active')
        );
    }

}

