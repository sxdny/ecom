<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_books', function( Blueprint $table) {
            /* Foreign Keys */
            $table->foreignId('user_id')->constrained();
            $table->foreignId('book_id')->constrained();

            /* "Compound Primary Key" */
            $table->primary(['user_id', 'book_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
