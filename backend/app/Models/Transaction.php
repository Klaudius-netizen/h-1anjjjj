<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    // The table associated with the model (optional if the table name is `transactions` by convention)
    protected $table = 'transaction';

    // The attributes that are mass assignable
    protected $fillable = [
        'id_pembeli',
        'nama_produk',
        'harga',
        'quantity',
        'total_belanja',
        'tanggal_pembelian',
    ];

    // Define relationships

    /**
     * Relationship to the Pembeli model
     */
    public function pembeli()
    {
        return $this->belongsTo(Pembeli::class, 'id_pembeli');
    }

    /**
     * Relationship to the Products model
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'nama_produk', 'nama_produk');
    }

    // Additional logic, e.g., calculating the total price
    public function calculateTotal()
    {
        return $this->harga * $this->quantity;
    }
}
