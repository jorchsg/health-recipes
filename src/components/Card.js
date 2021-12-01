import React from 'react'
import "./card.scss";
import CalorieIcon from "../assets/images/flame_icon.svg"
import CircleIcon from "../assets/images/plus-circle.svg"
import Btn from './Btn';

function Card(props) {
  const { image, title, time, servings, imageSrc } = props;
    return (
        <>
        <div className="card__content">
          <div className="card__content__image">
            <a href={imageSrc} target="_blank" rel='noopener noreferrer'>
              <img src={image} alt={image}/>
            </a>
          </div>
          <div className="card__content__container">
            <h2 className="card__title">{title}</h2>
            <div className="card__calories-info__content">
              <h4 className="card__calories-info__content__category">Ready In {time} mins</h4>
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
