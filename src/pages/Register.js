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
            <div className="register_container container box">
                <div className="register_container_header">
                    <h1>Sign Up</h1>
                </div>

                <div className="register_container_content">
                    <div className="register_container_content_col_form">
                        <form action="">
                            <div className="header_form">
                                <p>Registration <span> {'>'} Health Information</span></p>
                            </div>
                            <div className="field_form">
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
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
