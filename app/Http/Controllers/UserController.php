<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

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
        //dd(Hash::make($validated['password']));
        //dd($validated);

        return redirect('/');
    }

    /**
     * Login the user
     */
     public function login(LoginUserRequest $request)
     {
         // Using precognition, the values are already validated.
         $validated = $request->validated();

         // Hacemos un SELECT para ver si existe un usuario con esos campos
         $username = $validated['username'];
         $password = $validated['password'];

         // Comprobamos primero si el usuario existe en la base de datos
         if(DB::table('users')->get()->where('username', '=', $username)->first()) {
             // Ahora, comprobamos que las contraseñas coinciden...
             if(Hash::check($password, DB::table('users')->get()->where('username', '=', $username)->value('password'))) {
                 dd("Welcome ".$username."!");
                 // TODO: Aqui creamos un nuevo usuario y lo guardamos en la sesión.
             } else {
                 dd("The passwords do not match...");
             }
         } else {
             dd("The user does not exist on our database...");
         }
     }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
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
