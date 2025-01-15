<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Fetch all products
    public function index()
    {
        // Get all products and return them as a JSON response
        return response()->json(Product::all());
    }

    // Store a new product
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'nama_produk' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'image_path' => 'nullable|string',
        ]);

        // Create and store the product
        $product = Product::create($validated);

        // Return the created product as a JSON response
        return response()->json($product, 201);
    }

    public function addProduct()
    {
        // Data to be added
        $productData = [
            'nama_produk' => 'Product Name',
            'category' => 'Category Name',
            'harga' => 19.99,
            'image_path' => 'path/to/image.jpg', // Can be null if no image
        ];

        // Create a new product using the data
        $product = Product::create($productData);

        // Return a response or view
        return response()->json([
            'message' => 'Product added successfully!',
            'product' => $product
        ]);
    }
}
