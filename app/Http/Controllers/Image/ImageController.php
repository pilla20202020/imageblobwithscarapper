<?php

namespace App\Http\Controllers\Image;

use App\Http\Controllers\Controller;
use App\Modules\Models\Images\Images;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;
use Intervention\Image\Facades\Image;
use Goutte\Client;

class ImageController extends Controller
{
    //

    public function index()
    {
        //
        $images = Images::get();
        return view('image.index',compact('images'));
    }

    public function create() 
    {

        return view('image.create');

    }

    public function store(Request $request)
    {
        $image_file = $request->image;
        $image = Image::make($image_file);
        Response::make($image->encode('jpg'));
        $formdata = [
            'image' => $image
        ];
        Images::create($formdata);
        Toastr()->success('Image Created Successfully','Success');
        return redirect()->route('image.index');
    }

    public function fetchImage($image_id)
    {
        $image = Images::findOrFail($image_id);
        $image_file = Image::make($image->image);
        $response = Response::make($image_file->encode('jpeg'));
        $response->header('Content-Type', 'image/jpeg');
        return $response;
    }

    public function scraper()
    {
        $client = new Client();
    
        $website = $client->request('GET', 'https://www.businesslist.com.ng/category/interior-design/city:lagos');
        $companies = $website->filter('h4 > a')->each(function ($node) {
            dump($node->text());
        });
    }
}
