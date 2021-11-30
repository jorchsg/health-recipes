import React from 'react'
import "./cardStats.scss";

function CardStats (props) {
  const {
    icon,
    subtitle,
    legend,
    meassure = null
  } = props;

    return (
      <>
        <div className="card_stats__content">
          <div className="card_stats__col__image">
            <div className="card_stats__image">
              <img src={icon} alt="icon" />
            </div>
          </div>
          
          <div className="card_stats__col__data">
            <h3 className="card_stats__subtitle">{subtitle} <span>{meassure}</span></h3>
            <h4 className="card_stats__legend">{legend}</h4>
          </div>
        </div>
      </>
    )
}
export default CardStats;
