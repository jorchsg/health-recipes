import React, { useContext, useEffect } from 'react'
import CardStats from '../components/CardStats.js';
import "./dashboard.scss";
import Card from '../components/Card.js';
import FoodCard from '../assets/images/food_card.png';
import AuthContext from '../context/authentication/authContext.js';
import HeaderAuth from '../components/HeaderAuth.js';
import Btn from '../components/Btn.js';
//Icons
import CircleIcon from "../assets/images/plus-circle.svg";
import IconKcal from '../assets/images/iconKcal.png'
import IconWeight from '../assets/images/icon-weight.png'
import IconHearth from '../assets/images/icon-heart.png'

const Dashboard = () => {

    const authContext = useContext(AuthContext);
    const { getAuthUser, user } = authContext;

    useEffect(() => {
        getAuthUser();
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        //api.matchRecipesToDailyCalories(1468, 'day');
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <HeaderAuth />
            <div className="dashboard__content container">
                {/* { user ?  : null} */}
                <div className="dashboard__content__stats">
                    <h1>Personal Stats</h1> 
                    <div className="dashboard__content__stats_row">
                        <CardStats
                            icon={IconKcal}
                            subtitle="300"
                            legend="Calories"
                            meassure="kcal"
                        />
                        <CardStats
                            icon={IconWeight}
                            subtitle={user?.weight}
                            legend="Weight"
                            meassure="kgs"
                        />
                        <CardStats
                            icon={IconHearth}
                            subtitle="20.23"
                            legend="BMI"
                            meassure="kg/m2"
                        />
                    </div>
                </div>
                <div className="dashboard__content__cards">
                    <h1>Daily Meal Suggestion</h1>
                    <div className="dashboard__content__cards__row">
                        <Card
                            image={FoodCard}
                            title="Eggs with bacon"
                            category="Breakfast"
                            calories="346"
                        />
                        <Card
                            image={FoodCard}
                            title="Eggs with bacon"
                            category="Breakfast"
                            calories="346"
                        />
                        <Card
                            image={FoodCard}
                            title="Eggs with bacon"
                            category="Breakfast"
                            calories="346"
                        />                                   
                    </div>
                    <div className="dashboard__content__cards__btnAdd">
                        <Btn
                            class="primary"
                            title="Another Suggestion"
                            icon={CircleIcon}
                            type="secondary"
                        />
                        <Btn
                            class="secondary"
                            title="Add To My Meals"
                            icon={CircleIcon}
                        />
                    </div>
                </div>                                                                                                           
            </div>
        </>
    )
}

export default Dashboard;
