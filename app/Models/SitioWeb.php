<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SitioWeb extends Model
{
    protected $table = 'sitios_web';

    protected $fillable = [
        'url',
        'nombre',
        'descripcion',
        'imagen',
        'is_activo',
    ];
}
