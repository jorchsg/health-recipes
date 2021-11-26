import React from 'react'
import IconLogo from '../assets/images/icon-smartwatch-large.png'
import { Link } from 'react-router-dom';
import './header.scss';

const Header = (props) => {

    //Props
    const { title, labelButton, linkTo } = props;

    return (
        <>
            <header className="header_container">
                <div className="header_left">
                    <img
                        src={ IconLogo }
                        alt="icon smartwatch"
                    />
                    <span>Healthy Recipes</span>
                </div>
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
