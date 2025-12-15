<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * Specify the name of the table.
     */
    protected $table = 'users';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['first_name', 'last_name', 'email', 'username', 'password'];

    /**
    * The model's default values for attributes.
    *
    * @var array
    */
    protected $attributes = [
        'first_name' => '',
        'last_name' => '',
        'email' => '',
        'username' => '',
        'password' => '',
    ];
}
