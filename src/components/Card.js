import React from 'react'
import "./card.scss";
import CalorieIcon from "../assets/images/flame_icon.svg"
import CircleIcon from "../assets/images/plus-circle.svg"
import Btn from './Btn';

function Card(props) {
  const { image, title, time, servings } = props;
    return (
        <>
        <div className="card__content">
          <div className="card__content__image">
            <img src={image} alt={image}/>
          </div>
          <div className="card__content__container">
            <h2 className="card__title">{title}</h2>
            <div className="card__calories-info__content">
              <h4 className="card__calories-info__content__category">Ready In {time}</h4>
              <div className="card__calories__content">
                <img src={CalorieIcon} alt={CalorieIcon} />
                <h4>{servings} servings</h4>
              </div>
            </div>   
            <Btn
              title="Details"
              icon={CircleIcon}
            />               
          </div>
        </div>
        </>
    )
}

export default Card;
