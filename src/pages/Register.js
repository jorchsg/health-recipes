import React from 'react';
import Header from '../components/Header';
import SecureImg from '../assets/images/secure_signup.png';
import ArrowRightCircle from '../assets/images/arrow-right-circle.svg';
import './register.scss';

const Register = () => {
    return (
        <>
            <Header
                title='Already have an acount?'
                labelButton='Login'
                linkTo='/login'
            >
            </Header>
            <div className="register_container container">
                <div className="register_container_header">
                    <h1>Sign Up</h1>
                </div>

                <div className="register_container_content">
                    <div className="register_container_content_col_form">
                        <form action="">
                            <div className="header_form">
                                <p>Registration</p>
                            </div>
                            <div className="field_form">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="email">E-mail Address</label>
                                <input
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="height">Height</label>
                                <input
                                    type="text"
                                    name="height"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="text"
                                    name="weight"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="gender">Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                />
                            </div>
                            <div className="button-wrapper">
                                <button className="btn-continue">
                                    Continue
                                    <img src={ArrowRightCircle} alt="arrow-right"
                                /></button>
                            </div>
                        </form>
                    </div>
                    <div className="register_container_content_col_form_image">
                        <img src={SecureImg} alt="Secure" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
