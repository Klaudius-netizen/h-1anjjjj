<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::dropIfExists('transactions');
        Schema::create('transactions', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->unsignedBigInteger('id_pembeli'); 
            $table->unsignedBigInteger('id_produk');// Foreign key to 'pembeli' table
            $table->string('nama_produk'); // Fo`reign key to 'products' table
            $table->decimal('harga', 8, 2); // Store the product's price at the time of purchase
            $table->integer('quantity'); // Quantity of the product
            $table->decimal('total_belanja', 8, 2); // Total price (harga * quantity)
            $table->date('tanggal_pembelian')->nullable(); // Date of purchase
            $table->timestamps(); // Created at and updated at timestamps

            // Define foreign key relationships
            $table->foreign('id_pembeli')
                ->references('id')
                ->on('pembelis')
                ->onDelete('cascade');

            $table->foreign('id_produk')
                ->references('id')
                ->on('products')
                ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('transactions'); // Drops the table on rollback
    }
};
