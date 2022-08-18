// Layout
import Authenticated from "@/Layouts/Authenticated/Index";

// Components
import FeaturedMovie from "@/Components/FeaturedMovie";

// Utilities
import { Head } from "@inertiajs/inertia-react";

// Library
import Flickity from "react-flickity-component"; //Smooth Scroll
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
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
            <Authenticated>
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
                        {[1, 2, 3].map((index) => {
                            return (
                                <FeaturedMovie
                                    key={index}
                                    slug="the-batman-in-love"
                                    name={`The Batman In Love ${index}`}
                                    category="Action, Horror"
                                    thumbnail={`../images/featured-${index}.png`}
                                    rating={index + 1}
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
                            {[1, 2, 3, 4, 5].map((indexBrowse) => {
                                return (
                                    <MovieCard
                                        key={indexBrowse}
                                        slug={`browse-movie-${indexBrowse}`}
                                        name={`Browse Movie ${indexBrowse}`}
                                        thumbnail={`../images/browse-${indexBrowse}.png`}
                                        category="SciFi"
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
