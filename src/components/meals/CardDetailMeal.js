import React from 'react';
import apiBack from '../../Api/backendAPI';
import './cardDetailMeal.scss'

const CardDetailMeal = (props) => {
    const {
        title,
        textOne,
        textTwo,
        textThree,
        textFourth,
        mealId
    } = props;

    return (
        <>
            <div className="profile__card__content">
                <div className="head">
                    <span>{title}</span>
                    <div
                        className="delete"
                        onClick={ async () => await apiBack.deleteMealById(mealId) }
                    >
                    <span>Delete</span>
                    </div>
                </div>
                <div className="body">
                    <div className="field">
                        <span>Calories:</span>
                        <p>{textOne}</p>
                        
                    </div>
                    <div className="field">
                        <span>Carbohydrates:</span>
                        <p>{textTwo}</p>
                    </div>
                    <div className="field">
                        <span>Fat:</span>
                        <p>{textThree}</p>
                    </div>
                    <div className="field">
                        <span>Protein:</span>
                        <p>{textFourth}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDetailMeal;
