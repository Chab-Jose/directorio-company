<?php
namespace App\Services;

use App\DTOs\SubsidiariaDTO;
use App\Models\Subsidiaria;
use Illuminate\Support\Facades\DB;

class SubsidiariaService{

    public function create(SubsidiariaDTO $subsidiaria){

        DB::beginTransaction();
        try {

            $subsidiaria = Subsidiaria::create([
                'nombre_comercial' => $subsidiaria->nombreComercial,
                'codigo_subsidiaria' => $subsidiaria->codigoSubsidiaria,
                'razon_social' => $subsidiaria->razonSocial,
                'rfc' => $subsidiaria->rfc,
                'direccion' => $subsidiaria->direccion,
                'codigo_postal' => $subsidiaria->codigoPostal,
                'regimen_fiscal' => $subsidiaria->regimenFiscal,
                'is_activo' => $subsidiaria->isActivo,
            ]);
           DB::commit();

           return $subsidiaria;
       }catch (\Exception $e){
           DB::rollBack();
           throw $e;
       }
    }
}
