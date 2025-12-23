<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a new user
     */
    public function store(StoreUserRequest $request): RedirectResponse
    {
        // Using Precognition
        $validated = $request->validated();

        // Once validated, store user with hashed password.

        $user = User::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'username' => $validated['username'],
            'password' => Hash::make($validated['password'])
        ]);

        return redirect('/');
    }

    /**
     * Login the user
     */
     public function login(LoginUserRequest $request)
     {
         // Using precognition, the values are already validated.
         $validated = $request->validated();

         // Input del formulario
         $username = $validated['username'];
         $password = $validated['password'];

         // Hacemos un SELECT para ver si existe un usuario con esos campos
         $user_password = DB::table('users')->get()->where('username', '=', $username)->value('password');
         $user = Hash::check($password, $user_password) ? DB::table('users')->get()->where('username', '=', $username) : false;

         if($user) {
             // Guadamos el 'id' del usuario en la session.
             // TODO: Buscar como guardarlo.
             $request->session()->put('user_id', $user->value('id'));

             route('dashboard');
         } else {
             dd("Yeah, the password is not correct...");
         }


     }

    /**
     * Display the information about the user in the Dashboard.
     */
    public function show(Request $request)
    {
        $session_user_id = $request->session()->get('user_id');

        if($session_user_id) {
            // We need to return the Dashboard with the user object
            $user = DB::table('users')
                ->select('first_name', 'last_name', 'username', 'email')
                ->where('id', $session_user_id)
                ->first();
            return Inertia::render('dashboard', [
                'user' => $user
            ]);
        } else {
            return Inertia::render('dashboard');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
