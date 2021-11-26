import React, { useState } from 'react';
import Header from '../components/Header.js';
import SecureImg from '../assets/images/secure_signup.png';
import './login.scss';

const Login = () => {

  const [user, saveUser ] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header
        title='Dont have an acount?'
        labelButton='Sign Up'
        linkTo='/register'
      > </Header>
      <div className="login container box">
        <div className="login_header">
          <h1>Login</h1>
        </div>
        <div className="login_content">
          <div className="login_content_col_left">
            <form
              className="form"
              onSubmit={onSubmit}
            >
              <div className="formField">
                <label htmlFor="email">Email</label>
                <input
                  className="formInput"
                  label="E-mail address"
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="formField">
                <label htmlFor="password">Password</label>
                <input
                  className="formInput"
                  label="Password"
                  name="password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <button onSubmit={onSubmit}>
                Login
              </button>
            </form>
          </div>
          <div className="login_content_col_right">
              <img src={SecureImg} alt="Secure" />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Login
