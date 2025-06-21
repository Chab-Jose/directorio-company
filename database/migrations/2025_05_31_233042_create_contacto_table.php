<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacto_empleados', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('telefono', length:15)->nullable();
            $table->string('extension', length:5)->nullable();
            $table->string('direccion')->nullable();
            $table->foreignId('empleado_id')
                ->constrained('empleados')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacto_empleados');
    }
};
