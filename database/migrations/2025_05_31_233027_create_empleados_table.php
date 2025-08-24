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
        Schema::create('empleados', function (Blueprint $table) {
            $table->id();
            $table->string('nombres', length: 150);
            $table->string('no_empleado', length: 100)->unique();
            $table->string('apellido_paterno', length: 150);
            $table->string('apellido_materno', length: 150)->nullable();
            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');
            $table->foreignId('subsidiaria_id')
                ->constrained('subsidiarias')
                ->onDelete('cascade');
            $table->foreignId('puesto_id')
                ->constrained('puesto_trabajos')
                ->onDelete('cascade');
            $table->boolean('is_activo')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empleados');
    }
};
