import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import SecureImg from '../assets/images/secure_signup.png';
import ArrowRightCircle from '../assets/images/arrow-right-circle.svg';
import './register.scss';
import AlertContext from '../context/alerts/alertContext';
import AuthContext from '../context/authentication/authContext';

const Register = (props) => {

    //Extract Contexts
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser } = authContext;

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
        if (
            name.trim() === '' || email.trim() === '' || password.trim() === '' ||
            age.trim() === '' || height.trim() === '' || weight.trim() === '' ||
            gender.trim() === '' || confirm.trim() === ''
        ) {
            showAlert('All Fields Are Required', 'alert-error');
            return;
        }

        if (password.length < 8) {
            showAlert('The minimun password characters required is 8', 'alert-error');
            return;
        }

        if (password !== confirm) {
            showAlert('Passwords are not the same', 'alert-error');
            return;
        }

        registerUser({
            name,
            email,
            password,
            age,
            height,
            weight,
            gender,
        }); 
    };

    useEffect(() => {
        if (authenticated) {
            props.history.push('/dashboard')
        }
        if (message) {
            showAlert(message.msg, message.category);
        }
       // eslint-disable-next-line
    }, [message, authenticated, props.history] )

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
                                    name="email"
                                    value={email}
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
                                    autoComplete="on"
                                />
                            </div>
                            <div className="field_form">
                                <label htmlFor="confirm">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirm"
                                    value={confirm}
                                    onChange={onChange}
                                    autoComplete="on"
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
                                    onChange={onChange}
                                />
                            </div>
                            <div className="button-wrapper">
                                <button onClick={onSubmit} className="btn-continue">
                                    Continue
                                    <img src={ArrowRightCircle} alt="arrow-right"
                                /></button>
                            </div>
                        </form>
                    </div>
                    <div className="register_container_content_col_form_image">
                        <img src={SecureImg} alt="Secure" />
                        {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
