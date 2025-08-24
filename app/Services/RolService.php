<?php
namespace App\Services;

use App\DTOs\RolDTO;
use App\DTOs\SubsidiariaDTO;
use App\Models\Rol;
use App\Models\Subsidiaria;
use Illuminate\Support\Facades\DB;

class RolService{

    public function create(RolDTO $rol){

        DB::beginTransaction();
        try {

            $rol = Rol::create([
                'nombre' => $rol->nombre,
                'descripcion' => $rol->descripcion,
            ]);
           DB::commit();

           return $rol;
       }catch (\Exception $e){
           DB::rollBack();
           throw $e;
       }
    }
}
