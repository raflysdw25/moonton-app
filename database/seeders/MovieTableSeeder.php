<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                "name" => "The Batman",
                "slug" => "the-batman",
                "category" => "Action, Crime, Drama",
                "thumbnail"=> "https://en.wikipedia.org/wiki/File:The_Batman_(film)_poster.jpg",
                "video_url" => "https://www.youtube.com/watch?v=mqqft2x_Aa4",
                "rating" => 8.5,
                "is_featured" => 1,

            ],
            [
                "name" => "The Dark Knight",
                "slug" => "the-dark-knight",
                "category" => "Action, Crime, Drama",
                "thumbnail"=> "https://darkroom.bbfc.co.uk/751/https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg:84b982354be2d52d8836329b823768b5",
                "video_url" => "https://www.youtube.com/watch?v=mqqft2x_Aa4",
                "rating" => 9.0,
                "is_featured" => 0,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime, Drama',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'https://videolibrarian.com/downloads/4880/download/The%20Godfather.jpeg?cb=c7130321fb450aef95d2db59ba3caf9e&w=450&h=',
                'rating' => 9.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Godfather Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Crime, Drama',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
                'rating' => 9.0,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
