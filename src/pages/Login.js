import React, { useState } from 'react';
import SecureImg from '../assets/images/secure_signup.png';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import Header from '../components/Header.js';
import './login.scss';


const Login = () => {

  const [message, setMessage] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  };

  const submit = (form) => {
    setMessage(`Thanks for signing up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`);
  };

  return (
    <>
      
      <Header
        title='Dont have an acount?'
        labelButton='Sign up'
      > </Header>

      <div className="login container">
        <div className="login_header">
          <h1>Login Page</h1>
        </div>
        

        <div className="login_content">
          <div className="login_content_col_left">
            <Form
              submit={(form) => {
                alert(`Logged in as ${form.username}!`);
              }}
              initialValues={{
                email: '',
                password: ''
              }}>
              <FormInput
                label="E-mail address"
                name="email" />
              <FormInput
                label="Password"
                name="password"
                type="password"/>
            </Form>
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
