import React, {useState} from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import AppNavbar from './components/Navbar/AppNavbar';
import Register from './pages/Register'
import Login from './pages/Login';
import Logout from './pages/Logout';
import Products from './pages/Products'
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';
import Contact from './pages/Contact';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';
import Page404 from './pages/Page404';
import {UserProvider} from './UserContext'
import './App.css'
import Footer from './components/Footer/Footer'
import ScreenSize from './components/Commons/ScreenSize';

function App() {
  
  const [user, setUser] = useState({ token: localStorage.getItem("token"), email: localStorage.getItem("email"), isAdmin : localStorage.getItem("isAdmin"), fullName: localStorage.getItem("fullName")});
  const location = useLocation();
  let screenSize = ScreenSize;
  
  return (
    <div className="fullWindowWidth">
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
            <Route path="/products/get/:id" element={ <SingleProduct /> } />
            <Route path="*" element={ <Page404 /> } />
        	</Routes>
          <Footer />
      </UserProvider>
    </div>
  );
} 

export default App;
