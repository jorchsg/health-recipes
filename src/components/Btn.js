import React from 'react'
import "./btn.scss";

function Btn(props) {
  const {
    title,
    type = 'primary',
    with_icon = false,
    icon,
  } = props;
    return (
      <>
        <button className={`${type}`}>
          <p className="cbutton__title">{title}</p>
          {
            with_icon ?
            <img src={icon} alt={icon} className="button__image"/>
            : null
          }
        </button>
      </>
    )
}

export default Btn;
