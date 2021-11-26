import React, { useState } from 'react';
import Header from '../components/Header';
import SecureImg from '../assets/images/secure_signup.png';
import ArrowRightCircle from '../assets/images/arrow-right-circle.svg';
import './register.scss';

const Register = () => {

    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        age: '',
        height: '',
        weight: '',
        gender: '',
    });

    const { name, email, password, age, height, weight, gender, confirm } = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
    };

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
                        <form action="" onSubmit={onSubmit}>
                            <div className="header_form">
                                <p>Registration</p>
                            </div>
                            <div className="field_form">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="email">E-mail Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={onChange}
                                    value={password}
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="confirm">Confirm Password</label>
                                <input
                                    type="confirm"
                                    name="confirm"
                                    value={confirm}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={age}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="height">Height</label>
                                <input
                                    type="text"
                                    name="height"
                                    value={height}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="text"
                                    name="weight"
                                    value={weight}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="gender">Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={gender}
                                    onChane={onChange}
                                />
                            </div>
                            <div className="button-wrapper">
                                <button onSubmit={onSubmit} className="btn-continue">
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
