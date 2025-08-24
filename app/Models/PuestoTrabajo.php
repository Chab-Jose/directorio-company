<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PuestoTrabajo extends Model
{
    protected $table = 'puesto_trabajos';

    protected $fillable = [
        'nombre',
        'codigo_puesto',
        'descripcion',
        'is_activo',
        'subsidiaria_id',
    ];
}
