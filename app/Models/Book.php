<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;

    /**
    * The table associated with the model.
    *
    * We really do not need to specify it.
    * If the model name is Book, Eloquent
    * will search for a table called `books`.
    *
    * protected $table = 'books';
    */

    /**
    * The primary key associated with the table.
    *
    * @var string
    */
    protected $primaryKey = 'isbn';

    /**
     * Using or not AUTO_INCREMENT.
     * In this case, the primary key is
     * 'isbn' (not a number). We don't
     * need the AUTO_INCREMENT.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The data type of the primary key
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
    * The model's default values for attributes.
    *
    * @var array
     */
    protected $attributes = [
        'options' => '[]',
        'delayed' => false,
    ];


}
