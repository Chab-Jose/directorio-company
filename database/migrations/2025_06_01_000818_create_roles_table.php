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
        Schema::create('dbo_roles', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', length: 100)->unique();
            $table->string('descripcion')->nullable();
            $table->timestamps();
        });

        Schema::create('dbo_modulos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', length: 100)->unique();
            $table->string('descripcion')->nullable();
            $table->integer('parent_id');
            $table->integer('orden');
            $table->boolean('has_submenu')->default(false);
            $table->timestamps();
        });

        Schema::create('dbo_operaciones', function (Blueprint $table) {
            $table->id();
            $table->string('codigo_operacion', length: 15)->unique();
            $table->string('accion')->unique();
            $table->foreignId('modulo_id')
                ->constrained('dbo_modulos')
                ->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('dbo_permisos', function (Blueprint $table) {
            $table->id();
            $table->integer('rol_id');
            $table->foreignId('operacion_id')
                ->constrained('dbo_operaciones')
                ->onDelete('cascade');
            $table->string('codigo_operacion', length: 15)
                ->constrained('dbo_operaciones', 'codigo_operacion')
                ->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dbo_permisos');
        Schema::dropIfExists('dbo_operaciones');
        Schema::dropIfExists('dbo_modulos');
        Schema::dropIfExists('dbo_roles');
    }
};
