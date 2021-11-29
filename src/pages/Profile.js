import React, { useContext, useEffect } from 'react';
import HeaderAuth from '../components/HeaderAuth';
import UserHealth from '../components/Profile/UserIHealth';
import UserInfo from '../components/Profile/UserInfo';
import AuthContext from '../context/authentication/authContext';
import './profile.scss';

const Profile = () => {

    const authContext = useContext(AuthContext);
    const { getAuthUser, user } = authContext;

    useEffect(() => {
        getAuthUser();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <HeaderAuth />
            <div className="profile__content container">
                <div className="profile__content__title">
                    <h1>Profile</h1>
                </div>
                <div className="profile__content__row">
                    <div className="profile__content__col">
                        <UserInfo
                            title={'Personal Info'}
                            name={user?.name}
                            gender={user?.gender}
                            email={user?.email}
                        />
                    </div>
                    <div className="profile__content__col">
                        <UserHealth
                            title={'Health'}
                            age={user?.age}
                            weight={user?.weight}
                            height={user?.height}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;