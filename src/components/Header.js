import React from 'react'
import IconLogo from '../assets/images/icon-smartwatch-large.png'
import './header.scss';

const Header = () => {
    return (
        <>
            <header className="header_container">
                <div className="header_left">
                    <img
                        src={IconLogo}
                        alt="icon smartwatch"
                    />
                    <span>Healthy Recipes</span>
                </div>
                <div className="header_right">
                    <div className="header_right_text">
                        <span>Already have an acount? </span>
                    </div>
                    <div className="header_right_button">
                        <button>
                            Login
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
