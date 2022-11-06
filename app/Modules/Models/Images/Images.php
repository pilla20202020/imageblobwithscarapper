<?php

namespace App\Modules\Models\Images;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Response;


class Images extends Model
{
    use HasFactory;

    protected $fillable = [
        'image'
    ];


    public function fetchImage($image_id)
    {
        
        $image = Images::findOrFail($image_id);
        $image_file = Image::make($image->image);
        $response = Response::make($image_file->encode('jpeg'));
        $response->header('Content-Type', 'image/jpeg');
        
        
        return $response;
    }
}
