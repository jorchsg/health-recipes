import React from 'react'
import Header from '../components/Header';
import FoodHome from '../assets/images/food_home.png';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="home_page_container">
                <div className="home_page_content">
                    <div className="home_page_content_left container">
                        <h1>Recepies that will comein handy for your diet</h1>
                        <Link to='/login'>
                            Lets Get Started
                        </Link>
                    </div>
                    <div className="home_page_content_right">
                        <img src={FoodHome} alt="food home" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
