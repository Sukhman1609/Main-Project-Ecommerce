import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { NavLink } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate(); 

  const [logindata, setlogindata] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    console.log('Login Logic:', logindata);
    e.preventDefault();
  
    axios.post('http://localhost:7000/api/login', logindata)
      .then((res) => {
        alert(res.data.msg);
        console.log(res.data);
  
        
        if (res.data.msg === 'User logged in!!!') {
          localStorage.setItem("token", res.data.token);
          
          navigate('/');
        } else {
          console.log('Login failed:', res.data.msg);
        }
      })
      .catch(err => console.error(err));
  };
  

  return (
    <div className='main'>
    <div  className='logins' style={{textAlign:'center'}}>
      <h1>Login Form</h1>
      <label>
        Email:
        <input className='inputField'
          type="text"
          value={logindata.email}
          onChange={(e) => setlogindata({ ...logindata, email: e.target.value })}
        />
      </label>
      <br />
      <label>
        Password:
        <input className='inputField'
          type="password"
          value={logindata.password}
          onChange={(e) => setlogindata({ ...logindata, password: e.target.value })}
        />
      </label>
      <br />
      <button className='down button1' onClick={handleLogin}>Login</button>
      <br />
      <p>
          Create an account? <NavLink to='/register'>Register here</NavLink>.
        </p>
    </div>
    <div className='quote'>
   Lets Shopping!!!
    </div>
    </div>
  );
};

export default Login;
