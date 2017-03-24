<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::any('/', 'AuthController@index');

Route::post('/auth/check', 'AuthController@check');
Route::post('/auth/login', 'AuthController@login');

Route::group(['namespace' => 'Admin'], function() {

    Route::post('/user/list', 'AuthController@login');

});
