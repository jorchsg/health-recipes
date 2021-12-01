import React, { useContext, useEffect, useState } from 'react'
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
import api from '../Api/healthyAPI.js';
import apiBack from '../Api/backendAPI.js';

const Dashboard = () => {

    const authContext = useContext(AuthContext);
    const { getAuthUser, user } = authContext;

    const [dailyMeals, setDailyMeals] = useState([]);

    const userCalories = user?.health?.calories;

    const getMealsByCalories = async () => {
        const response = await api.matchRecipesToDailyCalories(userCalories, 'day');
        setDailyMeals(response);
    };

    useEffect(() => {
        getAuthUser();
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        getMealsByCalories();
        // eslint-disable-next-line
    }, []);

    console.log(dailyMeals)

    return (
        <>
            <HeaderAuth />
            {/* {user ? : null } */}
            <div className="dashboard__content container">
                <div className="dashboard__content__stats">
                    <h1>Personal Stats</h1> 
                    <div className="dashboard__content__stats_row">
                        <CardStats
                            icon={IconKcal}
                            subtitle={user?.health?.calories}
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
                            subtitle={user?.health?.imc}
                            legend="BMI"
                            meassure="kg/m2"
                        />
                    </div>
                </div>
                <div className="dashboard__content__cards">
                    <h1>Daily Meal Suggestion</h1>
                    <div className="dashboard__content__cards__row">
                        {/* {
                            dailyMeals.meals.map(recipe => {
                                return (
                                    <Card
                                        key={recipe.id}
                                        image={FoodCard}
                                        title={recipe?.title}
                                        time={recipe?.readyInMinutes}
                                        servings={recipe?.servings}
                                        imageSrc={recipe?.sourceUrl}
                                    />
                                );
                            })
                        }            */}
                    </div>
                    <div className="dashboard__content__cards__btnAdd">
                        <Btn
                            class="primary"
                            title="Another Suggestion"
                            icon={CircleIcon}
                            type="secondary"
                            onClick={async () => await test() }
                        />
                        <button onClick={async () => await getMealsByCalories()}>
                            Get Meals
                        </button>
                        <button onClick={async () => await apiBack.addMeal(dailyMeals)}>
                            Add My Meals
                        </button>
                        <Btn
                            class="secondary"
                            title="Add To My Meals"
                            icon={CircleIcon}
                            with_icon={true}
                        />
                    </div>
                </div>                                                                                                           
            </div>
        </>
    )
}

export default Dashboard;
