<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubsidiariaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|max:250",
            "code" => "required|max:50|unique:App\Models\Subsidiaria,codigo_subsidiaria",
            "socialReason" => "required|max:250",
            "rfc" => "required|max:13|min:12|unique:App\Models\Subsidiaria,rfc",
            "address" => "required|max:250",
            "postalCode" => "required|max:10",
            "taxRegime" => "required|integer",
            "active" => "required|boolean"
        ];
    }
}
