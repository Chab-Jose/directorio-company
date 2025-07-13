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
        Schema::create('subsidiarias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_comercial')->unique();
            $table->string('codigo_subsidiaria', length:50)->unique();
            $table->string('razon_social');
            $table->string('rfc', length:13)->unique();
            $table->string('direccion')->nullable();
            $table->string('codigo_postal', length:10)->nullable();
            $table->integer('regimen_fiscal')->nullable();
            $table->boolean('is_activo')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subsidiarias');
    }
};
