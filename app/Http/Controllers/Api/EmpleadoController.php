<?php

namespace App\Http\Controllers\Api;

use App\DTOs\ContactoEmpleadoDTO;
use App\DTOs\EmpleadoDTO;
use App\DTOs\UserDTO;
use App\Http\Controllers\Controller;
use App\Services\EmpleadoService;
use Illuminate\Http\Request;
use RuntimeException;

class EmpleadoController extends Controller
{

    protected $svrEmpleado;

    public function __construct(EmpleadoService $svrEmpleado)
    {
        $this->svrEmpleado = $svrEmpleado;
    }

    public function index(Request $request)
    {
        // Logic to retrieve and return a list of employees
        return response()->json([
            'message' => 'List of employees',
            // Add actual employee data here
        ]);
    }

    public function store(Request $request)
    {
        try {
            $user =  UserDTO::fromRequest($request);
            $employee = EmpleadoDTO::fromRequest($request);
            $contact = ContactoEmpleadoDTO::fromRequest($request);

            $response = $this->svrEmpleado->create($employee, $contact, $user);

            return response()->json([
                'success' => true,
                'message' => 'Employee created successfully',
                'data' => $response
            ],201);

        } catch (\Throwable $th) {
             return response()->json([
                'success' => false,
                'message' => 'Error to create the employee',
                'errors' => $th->getMessage(),
            ],422);
        }

    }
}
