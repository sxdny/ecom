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
