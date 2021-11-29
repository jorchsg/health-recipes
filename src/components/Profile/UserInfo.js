import React from 'react'
import './userInfo.scss';

const UserInfo = (props) => {

    const { title, name, gender, email } = props;

    return (
        <div className="profile__card__content">
            <div className="head">
                <span>{ title }</span>
            </div>
            <div className="body">
                <div className="field">
                    <span>Name:</span>
                    <p>{ name }</p>
                </div>
                <div className="field">
                    <span>Gender:</span>
                    <p>{ gender }</p>
                </div>
                <div className="field">
                    <span>E-mail address:</span>
                    <p>{ email }</p>
                </div>
            </div>
        </div>
    )
}
export default UserInfo;
