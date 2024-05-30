import React, { useState } from 'react';
import "./Register.css";
import Footer from "../components/Footer/Footer";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='register'>
              <h1 className='hed'>REGISTER</h1>
              <form
                onSubmit={handleSubmit}
                className='register_form'
              >
                <label className="form__label">Email Id</label><br/>
              <br/>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='form__input'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                /><br/><br/>
                <label className="form__label">Password</label><br/><br/>

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='form__input'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                /><br/><br/>
                <button className='butn'>
                  REGISTER
                </button><br/><br/><br/><br/>
                <p className='form__label'>
                  
                    Already a User?
                  
                  <Link to='/login' style={{color:"red"}}>LOGIN HERE</Link>
                </p>
              </form>
            </div>
            <Footer/>
    </>
  );
};

export default Register;