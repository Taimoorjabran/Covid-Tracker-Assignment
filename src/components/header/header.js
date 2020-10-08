import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { setItemsLocalStorage } from '../../utility/localStorage';


const Header = (props) => {
    const today = new Date();
    const date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`;
    return (
        <div>
            <nav className="navbar navbar-light bg-primary fixed-top">
                <div className='container d-flex header-cont'>
                    <div className='text-dark header-logo'>
                        <strong>COVID-19 TRACKER</strong>
                    </div>
                    <div className='header-date'>
                        DATE: {date}
                    </div>
                    <div className='header-btn '>
                        <Link to='/'><button className='btn btn-primary' onClick={() => setItemsLocalStorage('isAuthenticated', false)}>LOGOUT</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;