import React from 'react'
import IconLogo from '../assets/images/icon-smartwatch-large.png'
import './header.scss';

const Header = (props) => {

    //Props
    const {
        title = "already have an account?",
        labelButton = "login"
    } = props;

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
                        <button>
                            { labelButton }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
