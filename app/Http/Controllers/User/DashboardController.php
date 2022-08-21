<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Models
use App\Models\Movie;

class DashboardController extends Controller
{
    public function index (){

        $featureMovies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();
         //Cara mudah untuk render file jsx dengan inertia, tanpa perlu memanggil class Inertia
        return inertia('User/Dashboard/Index', [
            "featuredMovies" => $featureMovies,
            "movies" => $movies
        ]);
    }
}
