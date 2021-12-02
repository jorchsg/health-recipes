import React from 'react'
import "./btn.scss";

function Btn(props) {
  const {
    title,
    type = 'primary',
    with_icon = false,
    icon,
    action,
  } = props;
    return (
      <>
        <button
          className={`${type}`}
          onClick={action}
        >
          <p className="button__title">{title}</p>
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
