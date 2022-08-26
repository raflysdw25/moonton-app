<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Auth;
class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // .$this->movie->id: untuk exception karena column name dibuat unique
            'name' => 'required|unique:Movies,name,'.$this->movie->id,
            'category' => 'required', 
            'video_url' => 'required|url', 
            'thumbnail' => 'image', 
            'rating' => 'required|numeric|min:0|max:5', 'is_featured' => 'nullable|boolean'
        ];
    }
}
