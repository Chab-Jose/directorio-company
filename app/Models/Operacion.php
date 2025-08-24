<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Operacion extends Model
{
    protected $table = 'dbo_operaciones';

    protected $fillable = [
        'codigo_operacion',
        'accion',
        'modulo_id',
    ];
}
