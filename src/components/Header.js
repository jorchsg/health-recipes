import React, { useContext, useEffect } from 'react'
import IconLogo from '../assets/images/icon-smartwatch-large.png'
import { Link } from 'react-router-dom';
import AuthContext from '../context/authentication/authContext';
import './header.scss';

const Header = (props) => {

    //Needed to redirect
    const authContext = useContext(AuthContext);
    const { getAuthUser } = authContext;

    useEffect(() => {
        getAuthUser();
        // eslint-disable-next-line
    }, [])

    //Props
    const {
        title = '',
        labelButton = 'Login',
        linkTo='/login'
    } = props;

    return (
        <>
            <header className="header_container">
                <Link to="/"> 
                    <div className="header_left">
                            <img
                                src={ IconLogo }
                                alt="icon smartwatch"
                            />
                        <span>Healthy Recipes</span>
                    </div>
                </Link>
                <div className="header_right">
                    <div className="header_right_text">
                        <span>{ title }</span>
                    </div>
                    <div className="header_right_button">
                        <Link to={linkTo}>
                            <button>
                                { labelButton }
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
