<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
    protected $table = 'dbo_permisos';

    protected $fillable = [
        'rol_id',
        'operacion_id',
        'codigo_operacion',
    ];
}
