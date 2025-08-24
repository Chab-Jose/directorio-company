<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subsidiaria extends Model
{
    protected $table = 'subsidiarias';

    protected $fillable = [
        'nombre_comercial',
        'codigo_subsidiaria',
        'razon_social',
        'rfc',
        'direccion',
        'codigo_postal',
        'regimen_fiscal',
        'is_activo',
    ];
}
