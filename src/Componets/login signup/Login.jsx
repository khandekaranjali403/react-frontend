import React, { useState } from 'react';
import './login.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import showNotification from '../../../src/helpers/show_notification';



const Form = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.post(`http://localhost:4000/admin/login`, { username: email, password: password });
    console.log(data.success)

    if (data.success.toString() == 'true') {
      console.log(data)
      localStorage.setItem("user", JSON.stringify(data.data));
      showNotification("Login successfully", "Success");
      navigate("/images")
      window.location.reload();
    } else if (data.success.toString() === 'false') {
      console.log(data.success)
      window.alert('error')
    }

  };


  return (
    <>
      <div className='bigee'>
        <p>Welcome to AdminPanel</p>

        <div className="maindivimg">
          <div className="authForm">
            <h1 id='headingLogin'>{isLogin ? 'Login' : 'Signup'}</h1>
            <form onSubmit={handleSubmit} style={{ marginLeft: '35rem' }}>
              <input
                className='emaill'
                type="email"
                placeholder="Email"
                value={email}
                id='email'
                onChange={handleEmailChange}
              />
              <br />
              <input
                className='emaill'
                type="password"
                placeholder="Password"
                value={password}
                id='password'
                onChange={handlePasswordChange}
              />
              <br />
              <br />
              <button type="submit" id='LoginBtn'>
                {isLogin ? 'Login' : 'Signup'}
              </button>
              <br />
            </form>
          </div>
        </div>
        <div className='StoreIconss'>
          {/* <img src={aStore} height={'60px'} width={'150px'} />
        <img src={gStore} height={'60px'} width={'150px'} /> */}
          {/* Provide the source URL for the image */}
          {/* <div style={{ position: 'relative', top: -440, left: 350 }}>
          <img src={'path-to-your-image'} height={'250px'} width={'300px'} />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Form;
