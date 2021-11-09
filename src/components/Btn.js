import React from 'react'
import "./btn.scss";

function Btn(props) {
  const { icon, title } = props;
    return (
        <>
            <button className="button__content">
                  <p className="cbutton__title">{title}</p>
                <img src={icon} alt={icon} className="button__image"/>
            </button>
        </>
    )
}

export default Btn;
