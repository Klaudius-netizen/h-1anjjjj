<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CartsTable extends Migration
{
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_produk');
            $table->string('nama_produk'); // Name of the product
            $table->decimal('harga', 8, 2); // Price of the product
            $table->integer('quantity'); // Quantity of the product
            $table->timestamps(); // Created at and updated at timestamps

            $table->foreign('id_produk')->references('id')->on('products')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
