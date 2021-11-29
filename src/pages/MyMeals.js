import React from 'react'
import HeaderAuth from '../components/HeaderAuth';
import './myMeals.scss'

const MyMeals = () => {
    return (
        <>
            <HeaderAuth />
            <div className="my__meals__content container">
                <h1>My Meals Page</h1>
            </div>
        </>
    )
}

export default MyMeals;
