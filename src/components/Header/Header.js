import React from 'react'
import { Link } from 'react-router-dom'
import Userpic from '../../images/UserPic.jpeg'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link to={'/'}>
                <div className='logo'>Movie App</div>
            </Link>
            <div className='user-image'>
                <img src={Userpic} alt='user' />
            </div>
        </div>
    )
}

export default Header