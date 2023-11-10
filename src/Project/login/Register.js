import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
const Register = () => {
  const navigate = useNavigate(); 

  const [data, setData] = useState({
    username: '',
    phone:'',
    email:'',
    password: '',
  });

  const handleRegister = (e) => {
    e.preventDefault()
    // console.log('Registration Logic:', data);
axios.post('https://bloging-web-vycy.onrender.com/api/register',data)
.then((res)=>{alert(res.data.msg);
  console.log(res.data);
  localStorage.setItem("token",res.data.token)
  navigate('/');
// alert('User successfully registered!');
})
.catch((err)=>{console.error(err);
  alert('User registration failed. Please try again.');})
  
  };

  return (
    <div className='main'>
    <div  className='logins' style={{textAlign:'center'}}>
      <h1>Registration Form</h1>
      <form onSubmit={handleRegister}>
      <label>
        Username:
        <input className='inputField'
          type="text"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          required/>
      </label>
      <br />
      <label>
        Phone:
        <input className='inputField'
          type="number"

          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          required/>
      </label>
      <br />
      <label>
       Email:
        <input className='inputField'
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required/>
      </label>
      <br />
      <label>
        Password:
        <input className='inputField'
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required/>
      </label>
      <br />
      
      <button  className='down button1' type='submit'>Register</button>
      <br />
      <p>
          Already have an account? <NavLink to='/login'>Login here</NavLink>.
        </p>
      </form>
    </div>
    {/* <div className='quote'>
    Wherever you may go; Life is a beautiful thing. Life is like a passing season. It comes and go. Whatever may come, it's better to enjoy the changing seasons.
    </div> */}
    </div>
  );
};

export default Register;
