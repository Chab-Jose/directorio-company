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
        Schema::create('sitios_web', function (Blueprint $table) {
            $table->id();
            $table->string('url')->unique();
            $table->string('nombre', length: 150)->nullable();
            $table->string('descripcion')->nullable();
            $table->boolean('is_activo')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sitios_web');
    }
};
