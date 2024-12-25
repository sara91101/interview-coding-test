<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRatingRequest;
use App\Models\Movie;
use App\Models\MovieRating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MoviesController extends Controller
{
    /**
     * Show a movie.
     */
    public function show(Request $request, String $slug): Response
    {
        return Inertia::render('Movies/Show', [
            'movie' => Movie::where('slug', $slug)->firstOrFail(),
        ]);
    }

    public function rate(StoreRatingRequest $request,$movie_id)
    {
        MovieRating::updateOrCreate(
            [
                'user_id'   => Auth::user()->id,
                'movie_id'=> $movie_id
            ],[
            'movie_id' => $movie_id,
            'user_id' => Auth::user()->id,
            'rating' => $request->rating,
            'notes' => $request->notes,
        ]);
    }

    public function removeRate($movie_id)
    {
        MovieRating::where('movie_id',$movie_id)->where('user_id' , Auth::user()->id)->delete();
    }
}
