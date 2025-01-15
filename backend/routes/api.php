<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::post('/data', function (Request $request) {
    // Validate incoming data
    $request->validate([
            'nama_produk' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'image_path' => 'nullable|string',
        ]);

    // Store data in the database
    $data = Product::create([
        'nama_produk' => $request->nama_produk,
        'category' => $request->category,
        'harga' => $request->harga,
        'image_path' => $request->image_path,
    ]);

    return response()->json(['message' => 'Data saved successfully', 'data' => $data], 201);
});

Route::get('/data', function () {
    // Fetch all products from the database
    $products = Product::all();
    return response()->json($products);
});