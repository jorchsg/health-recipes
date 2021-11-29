import React from 'react'
import './userInfo.scss';

const UserHealth = (props) => {

    const { title, age, weight, height } = props;

    return (
        <div className="profile__card__content">
            <div className="head">
                <span>{title}</span>
            </div>
            <div className="body">
                <div className="field">
                    <span>Age:</span>
                    <p>{ age } years old</p>
                </div>
                <div className="field">
                    <span>Weight:</span>
                    <p>{ weight } kgs</p>
                </div>
                <div className="field">
                    <span>Height:</span>
                    <p>{ height } cm</p>
                </div>
            </div>
        </div>
    )
}
export default UserHealth;
