import React from 'react';
import ReactDOM from 'react-dom';
import AppNavbar from './components/AppNavbar';
import Register from './components/Register'
import Login from './components/Login';
import Home from './pages/Home';


function App() {
  return (
    <>
      <AppNavbar />
      <Home />
      <Register />
    </>
  );
} 

export default App;
