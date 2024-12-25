<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Movie extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'slug',
        'title',
        'description',
        'released',
    ];

    protected $appends = ['average_rate','user_rate'];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'released' => 'datetime',
        ];
    }

    public function ratings()
    {
        return $this->hasMany(MovieRating::class,'movie_id');
    }


    public function getAverageRateAttribute()
    {
        return $this->attributes['average_rate'] = ceil($this->ratings->avg('rating') * 2) / 2;
    }

    public function getUserRateAttribute()
    {
        $user_movie_rate = $this->ratings->where('user_id',Auth::user()->id)->first();
        return $this->attributes['user_rate'] = !is_null($user_movie_rate) ? $this->ratings->where('user_id',Auth::user()->id)->first() : false;
    }
}
