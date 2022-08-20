<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Controller
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::redirect('/', '/login');

// Route::get('/dashboard',  [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');

    // movie:slug => ambil data slug dari table movie (data yang diambil haruslah unik), sehingga ketika diarahkan ke controller, bisa diambil berdasarkan data unik tersebut
    Route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login', function() {
        // Return render halaman react js
        return Inertia::render('Prototype/Login');
    })->name('login');
    
    Route::get('/register', function() {
        return Inertia::render('Prototype/Register');
    })->name('register');

    Route::get('/dashboard', function() {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');
    
    Route::get('/subscriptionPlan', function() {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');
    
    Route::get('/movie/{slug}', function() {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');


});



require __DIR__.'/auth.php';
