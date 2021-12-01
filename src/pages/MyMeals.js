import React, { useEffect, useState } from 'react'
import HeaderAuth from '../components/HeaderAuth';
import CardDetailMeal from '../components/meals/CardDetailMeal';
import axios from 'axios';
import FoodCard from '../assets/images/food_card.png';
import './myMeals.scss';
import Card from '../components/Card';


const MyMeals = () => {

    const url = process.env.REACT_APP_BACKEND_URL

    const [myMeals, setMyMeals] = useState([]);

    const getAllMyMeals = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get(`${url}my_meals/getAll`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log('Yeah', response.data.data);
            const userMeals = response.data.data;
            setMyMeals(userMeals);
        } catch (error) {
            console.error('Oh no', error.response);
        }
    }

    //console.log('My Meals: ', myMeals);
    //console.log('Daily Meals', dailyMeals);

    useEffect(() => {
        getAllMyMeals();
    }, [])

    return (
        <>
            <HeaderAuth />
            <div className="my__meals__content container">
                <h1>Summary</h1>
                <div className="my__meals__content__summary">
                    {
                        myMeals.map((data, index) => {
                            return (
                                <>
                                    {/* <h1>{data?.date}</h1> */}
                                    <CardDetailMeal
                                        key={index}
                                        title={'Summary Info'}
                                        textOne={data?.calories}
                                        textTwo={data?.carbohydrates}
                                        textThree={data?.fat}
                                        textFourth={data?.protein}
                                    />
                                    {
                                        data.meals.map((recipe => {
                                            return (
                                                <Card
                                                    key={recipe.id}
                                                    image={FoodCard}
                                                    title={recipe?.title}
                                                    time={recipe?.readyInMinutes}
                                                    servings={recipe?.servings}
                                                />
                                            )
                                        }))
                                    }
                                </>
                            )
                        })
                    }
                </div>
                <div className="my__meals__content__meal">

                </div>
            </div>
        </>
    )
}

export default MyMeals;
