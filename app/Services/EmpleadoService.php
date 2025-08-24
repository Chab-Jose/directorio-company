<?php
namespace App\Services;

use App\DTOs\ContactoEmpleadoDTO;
use App\DTOs\EmpleadoDTO;
use App\DTOs\UserDTO;
use App\Models\ContactoEmpleado;
use App\Models\Empleado;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use RuntimeException;

class EmpleadoService{

    public function create(EmpleadoDTO $empleado, ContactoEmpleadoDTO $contacto, UserDTO $usuario){

        DB::beginTransaction();
        try {
           $mdlUser = User::create([
               'name' => $usuario->name,
               'email' => $usuario->email,
               'password' => Hash::make($usuario->password),
               'role_id' => $usuario->role_id,
               'is_active' => $usuario->is_activo
           ]);

           $mdlEmpleado = Empleado::create([
               'nombres' => $empleado->nombres,
               'no_empleado' => $empleado->no_empleado,
               'apellido_materno' => $empleado->apellido_materno,
               'apellido_paterno' => $empleado->apellido_paterno,
               'user_id' => $mdlUser->id,
               'subsidiaria_id' => $empleado->subsidiaria_id,
               'puesto_id' => $empleado->puesto_id,
               'is_activo' => $empleado->is_activo,
           ]);

           $mdlcontacto = ContactoEmpleado::create([
               'email' => $contacto->email,
               'telefono' => $contacto->telefono,
               'extension' => $contacto->extension,
               'direccion' => $contacto->direccion,
               'empleado_id' => $mdlEmpleado->id,
           ]);

           DB::commit();

           return $mdlEmpleado;
       }catch (\Exception $e){
           DB::rollBack();
           throw $e;
       }
    }
}
