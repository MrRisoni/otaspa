<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Upsale;
use App\Models\Meal;
use App\Models\Baggage;


class BookController extends Controller
{
    //

    public function upsales()
    {
       return Upsale::where('type_id','=',1)->get()->toJson();
    }

    public function meals()
    {
        return Meal::orderBy('meal_type_id')->orderBy('price')->get()->toJson();
    }

    public function priceChange(Request $req)
    {
        return $req->session()->get('key');
    }

    public function baggages()
    {
        return Baggage::all()->toJson();
    }


}
