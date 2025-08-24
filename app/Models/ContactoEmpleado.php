<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactoEmpleado extends Model
{
    protected $table = 'contacto_empleados';

    protected $fillable = [
        'email',
        'telefono',
        'extension',
        'direccion',
        'empleado_id'
    ];
}
