<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'      => 'required|min:3|max:255',
            'telephone' => ['required', 'regex:/(\+7|8|7)\s?[(]?(\d{3})[)]\s?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/'],
            'message'   => 'required|min:3|max:255',
            'status'    => 'required'
        ];
    }
}
