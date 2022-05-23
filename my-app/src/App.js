import React, {useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Register from './pages/Register'
import Login from './pages/Login';
import Logout from './pages/Logout';
import Products from './pages/Products'
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import Contact from './pages/Contact';
import About from './pages/About';
import {UserProvider} from './UserContext'
import './App.css'

function App() {
  
  const [user, setUser] = useState({ token: localStorage.getItem("token"), email: localStorage.getItem("email"), isAdmin : localStorage.getItem("isAdmin"), fullName: localStorage.getItem("fullName")});
  const location = useLocation();

  
  return (
    <>
      <UserProvider value={{user, setUser}}>
        {(location.pathname === '/') ? <></> : <AppNavbar />}
        	<Routes>
        		<Route path="/" element={ <Home /> } />
            <Route path="/register" element={ <Register /> } />
        		<Route path="/login" element={ <Login /> } />
            <Route path="/logout" element={ <Logout /> } />
            <Route path="/products" element={ <Products />} />
            <Route path="/admin" element={ <Admin /> } />
            <Route path="/user" element={ <User /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/about" element={ <About /> } />
        	</Routes>
      </UserProvider>
    </>
  );
} 

export default App;
