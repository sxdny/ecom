<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/dashboard', function() {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('/login', function() {
    return Inertia::render('auth/login');
})->name('login');
