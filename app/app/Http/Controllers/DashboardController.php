<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the dashboard.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard', [
            'movies' => Movie::all(),
        ]);
    }
}
