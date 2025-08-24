<?php

namespace App\Http\Controllers\Api;

use App\DTOs\SubsidiariaDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubsidiariaRequest;
use App\Services\SubsidiariaService;
use GuzzleHttp\Psr7\Query;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class SubsidiariaController extends Controller
{
    protected $svrSubsidiaria;

    public function __construct(SubsidiariaService $svrSubsidiaria) {
        $this->svrSubsidiaria = $svrSubsidiaria;
    }

    public function store(SubsidiariaRequest $request)
    {
        try {
            $subsidiaria =  SubsidiariaDTO::fromRequest($request);

            $response =  $this->svrSubsidiaria->create($subsidiaria);

            return response()->json([
                'success' => true,
                'message' => 'Subsidiary created successfully',
                'data' => $response
            ],201);

        }catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Error to create the subsidiary',
                "errors" => $th->getMessage(),
            ],422);
        }

    }
}
