import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import NavbarPage from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchStaffs} from './Components/Staff/staffListSlide'


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchStaffs()); 
  }, [])

  return (
    <div className="App"> 
      <NavbarPage />
      <Outlet />
      <Footer />      
    </div>
  );
}

export default App;
