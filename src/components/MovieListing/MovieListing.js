import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

import './MovieListing.scss'

const MovieListing = () => {
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
                    {renderMovie}
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