import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Userpic from '../../images/UserPic.jpeg'
import './Header.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Header = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert('Please Search Something');
        // console.log(term);
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("")

    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to={'/'}>
                    Movie App
                </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='Search Movies or Shows' value={term} onChange={(e) => setTerm(e.target.value)} />
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={Userpic} alt='user' />
            </div>
        </div>
    )
}

export default Header