import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faRecordVinyl,
  faUserInjured,
  faUserAstronaut,
  faBlenderPhone,
  faCarrot
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';

import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  const toggleSidebar = e => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('slide-right');
  };

  const active = {
    color: '#6bc774'
  };

  return (
    <>
      <div id="navigation" className="flex-row-center navColor">
        <div id="burger">
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        </div>
        <div id="logo">
          <NavLink to="/">BABYLON RECORDS</NavLink>
        </div>
      </div>
      <div id="sidebar" className="navColor">
        <div className="menu-item" onClick={toggleSidebar}>
          <NavLink activeStyle={active} to="/dashboard">
            <FontAwesomeIcon icon={faCarrot} />
            Dashboard
          </NavLink>
        </div>
        <div className="menu-item" onClick={toggleSidebar}>
          <Link to="">
            <FontAwesomeIcon icon={faRecordVinyl} />
            About Us
          </Link>
        </div>
        <div className="menu-item" onClick={toggleSidebar}>
          <Link to="">
            <FontAwesomeIcon icon={faBlenderPhone} />
            Contact
          </Link>
        </div>
        <div className="divider"></div>
        <div className="menu-item" onClick={toggleSidebar}>
          <NavLink to="/login" activeStyle={active}>
            <FontAwesomeIcon icon={faUserInjured} />
            Login
          </NavLink>
        </div>
        <div className="menu-item" onClick={toggleSidebar}>
          <NavLink to="/signup" activeStyle={active}>
            <FontAwesomeIcon icon={faUserAstronaut} />
            Sign up
          </NavLink>
        </div>
        <div className="divider"></div>
        <div className="menu-item social">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faDiscord} />
        </div>
      </div>
    </>
  );
}

export default Navigation;
