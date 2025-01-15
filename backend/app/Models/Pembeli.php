<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembeli extends Model
{
    use HasFactory;

    // Define the table name (optional if the table follows Laravel's naming convention)
    protected $table = 'pembelis';

    // Define the fillable fields (these are the fields that can be mass assigned)
    protected $fillable = [
        'nama_pembeli', // Name of the product
        'alamat',    // Category of the product
        'nomor_telepon',       // Price of the product
        'email',  // Path to the product image
    ];

}
