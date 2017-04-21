<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Upsale;


class BookController extends Controller
{
    //

    public function upsales()
    {
       return Upsale::where('type_id','=',1)->get()->toJson();
    }


    public function priceChange(Request $req)
    {
        return $req->session()->get('key');
    }
}
