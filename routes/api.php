<?php

use App\Http\Controllers\Api\EmpleadoController;
use App\Http\Controllers\Api\SubsidiariaController;
use Illuminate\Support\Facades\Route;


Route::get('/empleados', [EmpleadoController::class, 'index'])
    ->name('empleados.index');
Route::post('/empleados', [EmpleadoController::class, 'store'])
    ->name('empleados.store');


Route::post('/subsidiarias', [SubsidiariaController::class, 'store'])
    ->name('subsidiaria.store');

Route::post('/roles', [App\Http\Controllers\Api\RolController::class, 'store'])
    ->name('roles.store');
