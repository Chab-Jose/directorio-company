<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Modulo extends Model
{
    protected $table = 'dbo_modulos';

    protected $fillable = [
        'nombre',
        'descripcion',
        'parent_id',
        'orden',
        'has_submenu',
    ];


}
