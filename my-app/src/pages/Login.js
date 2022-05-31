import React, {useState, useContext, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive'
import Swal from 'sweetalert2';
import {useNavigate, Link} from 'react-router-dom';
import UserContext from '../UserContext';
import { Form, Button } from 'react-bootstrap'



export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const isSmall = useMediaQuery({ maxWidth: 768 });
  const navi = useNavigate();
  const {setUser} = useContext(UserContext);
   useEffect(() => {
      if(localStorage.getItem("token"))
        navi('/')
    })

  const login = (e) => {
    e.preventDefault();
    fetch(`https://infinite-sea-39312.herokuapp.com/login`, {
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
          localStorage.setItem("id", JSON.stringify(data.id).replace(/"/g, ""));
          setUser({
            token: localStorage.getItem('token'),
            email: localStorage.getItem('email'),
            isAdmin: localStorage.getItem('isAdmin'),
            fullName: localStorage.getItem('fullname'),
            id: localStorage.getItem("id")
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
    <div className="p-lg-5 p-0 fitHeight d-flex border border-black justify-content-center loginContent loginPic">
      <Form onSubmit={e => login(e)} className="d-flex flex-column p-lg-5 p-4 m-0 my-3 loginCard">
        <h1 className="text-center mb-2">Login</h1>
        <hr className="p-0  m-2" style={{color: "grey"}}/> 
        <Form.Group className="m-2">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" onChange={e => setEmail(e.target.value)} value={email} required />
        </Form.Group>

          <Form.Group className="m-2">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" onChange={e => setPass(e.target.value)} value={pass} required />
        </Form.Group>


        <Link to="/register" className="m-2 text-black">Click here to create account</Link>
        <Button type="submit" className="m-2">Submit</Button>
      </Form>
    </div>
  );
}

