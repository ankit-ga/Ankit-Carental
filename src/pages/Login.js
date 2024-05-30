import './Login.css';
import Footer from "../components/Footer/Footer";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
<>
    <div className='login'>
            <h1 className='log'>LOGIN</h1>
            {error ? <p>{error}</p> : null}
            <form onSubmit={handleSubmit} className='content'>
                <br/><br/><br/>
                <label className="itm">LOGIN ID</label><br/>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='inp'
                type='email'
                placeholder='Email'
                autoComplete='email'
              /><br/>
              <label className="itm">PASSWORD</label><br/>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='inp'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              /><br/><br/>
              <button className='butn'>
                Login
              </button>
              <p className='itm'>New User?
                <Link to='/register' style={{color:"red"}}>REGISTER HERE</Link>
              </p>
            </form>
          </div>
          <Footer/>
          </>   
  );
};

export default Login;
