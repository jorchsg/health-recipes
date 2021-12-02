import React, { useContext, useEffect, useState } from 'react';
import HeaderAuth from '../components/HeaderAuth';
import Modal from '../components/Modal/Modal';
import UserHealth from '../components/Profile/UserIHealth';
import UserInfo from '../components/Profile/UserInfo';
import AuthContext from '../context/authentication/authContext';
import useModal from '../hooks/customHooks/useModal';
import './profile.scss';

const Profile = () => {

    const authContext = useContext(AuthContext);
    const { getAuthUser, user } = authContext;

    const { isShowing, toggle } = useModal();

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
{/*                 <button
                    className="button-default"
                    onClick={toggle}>Show Modal
                </button> */}
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                >
                    <div className="">
                        Hey
                    </div>
                </Modal>
            </div>
        </>
    )
}
export default Profile;