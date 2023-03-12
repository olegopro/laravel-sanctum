<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $attr = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'name'     => $attr['name'],
            'password' => bcrypt($attr['password']),
            'email'    => $attr['email']
        ]);

        $token = $user->createToken('user_token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $attr = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required']
        ]);

        if (!Auth::attempt($attr)) {
            return response()->json([
                'errors' => (object)[
                    'password' => [
                        'Некорректные имя или пароль'
                    ]
                ]
            ], 422);
        }

        return response()->json([
            'user'  => User::where('email', '=', $request->input('email'))->firstOrFail(),
            'token' => auth()->user()->createToken('user_token')->plainTextToken
        ]);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        // $request->user()->currentAccessToken()->delete();

        return response()->json('Вы вышли из системы');

    }
}
