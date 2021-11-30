import React, { useEffect, useState } from 'react'
import HeaderAuth from '../components/HeaderAuth';
import axios from 'axios';
import './myMeals.scss';
import UserInfo from '../components/Profile/UserInfo';
import CardDetailMeal from '../components/meals/CardDetailMeal';

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
            //console.log('Yeah', response.data.data);
            const userMeals = response.data.data;
            setMyMeals(userMeals);
        } catch (error) {
            console.error('Oh no', error.response);
        }
    }

    console.log('My Meals: ', myMeals);

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
                                <CardDetailMeal
                                    key={index}
                                    title={'Summary Info'}
                                    textOne={data?.calories}
                                    textTwo={data?.carbohydrates}
                                    textThree={data?.fat}
                                    textFourth={data?.protein}
                                />

                            );
                            
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
