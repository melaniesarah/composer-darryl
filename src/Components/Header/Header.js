import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import Logo from './logo.png';
import Darryl3 from './darryl1new3.jpg';
import HeaderImage from './header.png';
import HomeImage from './home.png';
import AboutImage from './about.png';
import GroupsImage from './performing_groups.png';
import MediaImage from './film_multimedia.png';
import GuestImage from './guest_appearances.png';
import ContactImage from './contact.png';
import './Header.css';

function Header() {
    const location = useLocation();
    let headerStyle, headerMenuStyle;
    if (location.pathname === "/") {
      headerStyle = {
        height: '425px',
        backgroundImage: `url(${Darryl3})`,
        backgroundRepeat: 'no-repeat',
      };
      headerMenuStyle = {
        background: '#000'
      };
    } else {
      headerStyle = {
        height: '126px',
        background: 'none'
      };
      headerMenuStyle = {
        backgroundImage: `url(${HeaderImage})`,
      };
    }

    return (
      <header style={headerStyle}>
        <div className="header-menu" style={headerMenuStyle}>
          <Link to="/">
            <img src={Logo} alt="Website Logo" className="logo" />
          </Link>
          <nav className="header-nav">
            <NavLink exact to="/">
              <img src={HomeImage} alt="Home" />
            </NavLink>
            <NavLink to="/about">
              <img src={AboutImage} alt="About" />
            </NavLink>
            <button className="has-submenu">
              <img src={GroupsImage} alt="Performing <br /> Groups" />
              <div className="submenu">
                <NavLink to="/groups/wind">Wind Band</NavLink>
                <NavLink to="/groups/orchestra">Orchestra</NavLink>
                <NavLink to="/groups/jazz">Jazz Band</NavLink>
                <NavLink to="/groups/chamber">Chamber Ensembles</NavLink>
                <NavLink to="/groups/marching">Marching Band</NavLink>
              </div>
            </button>

            <NavLink to="/multimedia">
              <img src={MediaImage} alt="Film &#38; <br /> Media" />
            </NavLink>
            <NavLink to="/appearances">
              <img src={GuestImage} alt="Guest <br /> Appearances" />
            </NavLink>
            <NavLink to="/contact">
              <img src={ContactImage} alt="Contact" />
            </NavLink>
          </nav>
        </div>
      </header>
    );
}

export default Header;
