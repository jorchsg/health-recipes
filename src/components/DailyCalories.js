import React from 'react'
import "./dailyCalories.scss";

function DailyCalories(props) {
  const { calories, subtitle,legend } = props;
    return (
        <>
            <div className="daily-calories__content">
                <div className="daily-calories__cal-content">
                  <h1 className="daily-calories__amount">{calories}</h1>
                  <h3 className="daily-calories__subtitle">{subtitle}</h3>
                </div>
                <h4 className="daily-calories__legend">{legend}</h4>
            </div>
        </>
    )
}

export default DailyCalories;
