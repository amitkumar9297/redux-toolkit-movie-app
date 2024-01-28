import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends"
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));

    }, [dispatch])

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    )
}

export default Home



// const fetchMovies = async () => {
//     const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
//         .catch((err) => {
//             console.log(err);
//         })

//     dispatch(addMovies(response.data));
// }