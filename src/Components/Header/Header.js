import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo.png';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="Website Logo" className="logo" />
          </Link>
        </div>
        <nav className="header-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <div className="dropdown">
            <button class="dropbtn">Performing Groups</button>
            <div class="dropdown-content">
              <NavLink to="/groups/wind">Wind Band</NavLink>
              <NavLink to="/groups/orchestra">Orchestra</NavLink>
              <NavLink to="/groups/jazz">Jazz Band</NavLink>
              <NavLink to="/groups/chamber">Chamber Ensembles</NavLink>
              <NavLink to="/groups/marching">Marching Band</NavLink>
            </div>
          </div>
          <NavLink to="/multimedia">Film and Media</NavLink>
          <NavLink to="/appearances">Guest Appearances</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    );
}

export default Header;
