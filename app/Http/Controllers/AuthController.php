<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class AuthController extends Controller
{

    public function __construct()
    {

    }

    public function index(Request $request)
    {
        return view('index');
    }

    public function check(Request $request)
    {
        if (Auth::check()) {
            return response('Success.', 200);
        } else {
            return response('Unauthorized.', 401);
        }
    }

    public function login(Request $request)
    {
        $auth = base64_decode($request->auth);
        list($name, $password) = explode('|', $auth);
        if (Auth::attempt(['name' => $name, 'password' => $password], true)) {
            return response('Success.', 200);
        } else {
            return response('Unauthorized.', 401);
        }
    }
}
