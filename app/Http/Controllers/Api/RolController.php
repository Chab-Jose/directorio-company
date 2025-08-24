<?php

namespace App\Http\Controllers\Api;

use App\DTOs\RolDTO;
use App\Http\Controllers\Controller;
use App\Models\Rol;
use App\Services\RolService;
use Illuminate\Http\Request;

class RolController extends Controller
{
    protected $rolService;

    public function __construct(RolService $rolService){
        $this->rolService = $rolService;
    }

    public function store(Request $request){
        try {
            $rol = RolDTO::fromRequest($request);

            $response = $this->rolService->create($rol);

            return response()->json([
                'success' => true,
                'message' => 'Role created successfully',
                'data' => $response
            ],201);


        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error to create the role',
                'errors' => $th->getMessage(),
            ],422);


        }
    }
}
