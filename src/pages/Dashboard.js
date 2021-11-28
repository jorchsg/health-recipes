import React, { useContext, useEffect } from 'react'
import DailyCalories from '../components/DailyCalories.js';
import "./dashboard.scss";
import Card from '../components/Card.js';
import FoodCard from '../assets/images/food_card.png';
import { BarChart, Legend, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Weeklydata from '../utils/chartData.js';
import AuthContext from '../context/authentication/authContext.js';
import HeaderAuth from '../components/HeaderAuth.js';

const Dashboard = () => {

    const authContext = useContext(AuthContext);
    const { getAuthUser } = authContext;

    useEffect(() => {
        getAuthUser();
    },[])

    return (
        <>
            <HeaderAuth />
            <div className="dashboard__content">
                {/* { user ?  : null} */}
                <h1 className="dashboard__title reports">Reports</h1>
                <DailyCalories
                    calories="300"
                    subtitle="cal"
                    legend="Daily calories"
                />
                <div className="dashboard__weekly_chart">
                    <BarChart width={600} height={200} data={Weeklydata}           
                    margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                            }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="calories" barSize={20} fill="#F77F00" />
                    </BarChart> 
                </div>
                <h1 className="dashboard__title suggestions">Suggestions</h1>
                <div className="dashboard__cards__content">
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
                    <Card
                        image={FoodCard}
                        title="Eggs with bacon"
                        category="Breakfast"
                        calories="346"
                    />                                           
                </div>                                                                                                           
            </div>
        </>
    )
}

export default Dashboard;
