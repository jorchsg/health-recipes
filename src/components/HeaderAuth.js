import React, { useContext, useEffect } from 'react'
import IconLogo from '../assets/images/icon-smartwatch-large.png'
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/authentication/authContext';
import './headerAuth.scss';

const HeaderAuth = () => {
    const authContext = useContext(AuthContext);
    const { user, getAuthUser, logOut } = authContext;

    useEffect(() => {
        getAuthUser();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <header className="header_container">
                <div className="header_left">
                    <Link to="/">   
                        <img
                            src={IconLogo}
                            alt="icon smartwatch"
                        />
                        <span>Healthy Recipes</span>
                    </Link>
                </div>
                <ul className="header_center">
                    <li><NavLink exact activeClassName="active" to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink activeClassName="active" to='/my-meals'>My Meals</NavLink></li>
                    <li><NavLink activeClassName="active" to='/profile'>Profile</NavLink></li>
                </ul>
                <div className="header_right">
                    <div className="header_right_text">
                        <span>{user?.name}</span>
                    </div>
                    <div className="header_right_button">
                        <button
                            onClick={() => logOut()}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderAuth;
