import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

import './MovieListing.scss'

const MovieListing = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    // fetching movies
    const movies = useSelector(getAllMovies);
    let renderMovie = "";
    renderMovie = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => (
            < MovieCard key={index} data={movie} />
        ))
    ) : (
        <div className="movie-error"><h3>{movies.Error}</h3></div>
    );

    // fetching shows
    const shows = useSelector(getAllShows);
    let renderShow = "";
    renderShow = shows.Response === 'True' ? (
        shows.Search.map((show, index) => (
            < MovieCard key={index} data={show} />
        ))
    ) : (
        <div className="movie-error"><h3>{shows.Error}</h3></div>
    );
    console.log(movies.Search)
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {/* <Slider {...settings}> */}
                    {renderMovie}
                    {/* </Slider> */}
                </div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='show-container'>
                    {renderShow}
                </div>
            </div>
        </div>
    )
}

export default MovieListing