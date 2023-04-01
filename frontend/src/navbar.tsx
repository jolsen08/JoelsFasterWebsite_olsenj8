import React from 'react';
import { Link } from 'react-router-dom';

//Here is my navbar page. It includes a basic navbar with three buttons: Home, Movies, and Podcasts.
//I also styled it to match the color format of the rest of the site

const buttonStyle = { backgroundColor: '#0e416c', borderColor: '#0e416c' };

//As you can see in this function, we are using Link from react-router-dom to link to the other pages
function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <button className="btn btn-primary" style={buttonStyle}>
          Home
        </button>
      </Link>
      <br></br>
      <Link to="/movies">
        <button className="btn btn-primary" style={buttonStyle}>
          Movies
        </button>
      </Link>
      <br></br>
      <Link to="/podcasts">
        <button className="btn btn-primary" style={buttonStyle}>
          Podcasts
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
