// Layout
import Authenticated from "@/Layouts/Authenticated/Index";

// Components
import FeaturedMovie from "@/Components/FeaturedMovie";

// Utilities
import { Head } from "@inertiajs/inertia-react";

// Library
import Flickity from "react-flickity-component"; //Smooth Scroll
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ auth, featuredMovies, movies, errors }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Dashboard">
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                </Head>
                <div>
                    {/* START: Featured Movies */}
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity
                        className="gap-[30px] __scroll-selector"
                        options={flickityOptions}
                    >
                        {featuredMovies.map((featuredMovie) => {
                            return (
                                <FeaturedMovie
                                    key={`featured-movie-${featuredMovie.id}`}
                                    slug={featuredMovie.slug}
                                    name={featuredMovie.name}
                                    category={featuredMovie.category}
                                    thumbnail={featuredMovie.thumbnail}
                                    rating={featuredMovie.rating}
                                />
                            );
                        })}
                    </Flickity>
                    {/* END: Featured Movies */}

                    {/* START: Browse Movies */}
                    <div className="mt-[50px]">
                        <div className="font-semibold text-[22px] text-black mb-4">
                            Browse
                        </div>
                        <Flickity
                            className="gap-[30px] __scroll-selector"
                            options={flickityOptions}
                        >
                            {movies.map((movie) => {
                                return (
                                    <MovieCard
                                        key={`movie-${movie.id}`}
                                        slug={movie.slug}
                                        name={movie.name}
                                        thumbnail={movie.thumbnail}
                                        category={movie.category}
                                    />
                                );
                            })}
                        </Flickity>
                    </div>
                    {/* END: Browse Movies */}
                </div>
            </Authenticated>
        </>
    );
}
