import React from 'react';
import './App.css';
import NavBar from './navbar';
import { Outlet } from 'react-router-dom';

//This is my Layout page, previously the App page. It displays the NavBar function as well as
//the Outlet function from react-router-dom for routing

function Layout() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
