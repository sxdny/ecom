<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

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
    public function store(Request $request): RedirectResponse
    {
        $user = new User;

        // Los inputs, all llegar aquí, ya deberían de haberse
        // verificado en el frontend.
        // Laravel Precognition
        $user->first_name = $request->input('first_name') ? $request->input('first_name') : 'NDVP';

        $user->last_name = $request->input('last_name');
        $user->email = $request->input('email');
        $user->username = $request->input('username');
        $user->password = $request->input('password');

        dd($user);

        // Redirect
        return redirect('/');
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
