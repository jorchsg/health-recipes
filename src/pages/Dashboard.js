import React from 'react'
import Header from '../components/Header.js';
import DailyCalories from '../components/DailyCalories.js';
import "./dashboard.scss";
import Card from '../components/Card.js';
import FoodCard from '../assets/images/food_card.png';
import { BarChart, Legend, XAxis, YAxis, Tooltip, Bar} from 'recharts';

const Dashboard = () => {
    const Weeklydata = [
        {
            "name": "Monday",
            "calories": 2400,
        },
        {
            "name": "Tuesday",
            "calories": 1762,
        },
        {
            "name": "Wednesday",
            "calories": 2095,
        },
        {
            "name": "Thursday",
            "calories": 2197,
        },
        {
            "name": "Friday",
            "calories": 2007,
        },
        {
            "name": "Saturday",
            "calories": 1698,
        },
        {
            "name": "Sunday",
            "calories": 2200,
        }
    ]
    return (
        <>
            <Header
                title=''
                labelButton='Log out'
            />
            <div className="dashboard__content">
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
