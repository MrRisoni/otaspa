<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/upsales', 'BookController@upsales');
Route::get('/meals', 'BookController@meals');
Route::get('/baggages', 'BookController@baggages');

Route::get('/pricechange', 'BookController@priceChange');