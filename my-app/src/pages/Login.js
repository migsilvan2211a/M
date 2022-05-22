import {Button, Form} from 'react-bootstrap';
import React, {useState, useContext} from 'react';
import {useMediaQuery} from 'react-responsive'
import LoginBig from '../components/LoginBig';
import LoginSmall from '../components/LoginSmall';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'
import UserContext from '../UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const isSmall = useMediaQuery({ maxWidth: 750 });
  const navi = useNavigate();
  const {setUser} = useContext(UserContext);

  const login = (e) => {
    e.preventDefault();
    fetch('http://localhost:3500/login', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            email: email,
            password: pass
          })
        }
      ).then(response => response.json()).then(data => {
        console.log(data)
        if(data.token) {
          localStorage.setItem("token", JSON.stringify(data.token).replace(/"/g, ""));
          localStorage.setItem("isAdmin", JSON.stringify(data.isAdmin).replace(/"/g, ""));
          localStorage.setItem("email", JSON.stringify(data.email).replace(/"/g, ""));
          localStorage.setItem("fullName", JSON.stringify(data.fullName).replace(/"/g, ""));
          setUser({
            token: localStorage.getItem('token'),
            email: localStorage.getItem('email'),
            isAdmin: localStorage.getItem('isAdmin'),
            fullName: localStorage.getItem('fullname')
          });
          Swal.fire("Welcome!", "Successfully logged in", "success").then(() => navi("/"));
    
        }
        else
          Swal.fire("", data.error, "error")
      })
  }
  const props = {
    login: login,
    email: email,
    setEmail: setEmail,
    pass: pass,
    setPass: setPass
  }
  return (
    <>
     {isSmall ? <LoginSmall {...props} /> : <LoginBig {...props} />} 
    </>
  );
}


export default Login;