<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $table = 'empleados';

    protected $fillable = [
        'nombres',
        'no_empleado',
        'apellido_paterno',
        'apellido_materno',
        'user_id',
        'subsidiaria_id',
        'puesto_id',
        'is_activo',
    ];
}
