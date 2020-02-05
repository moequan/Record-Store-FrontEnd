import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import friend from '../assets/friend.gif';
import {
  faBars,
  faRecordVinyl,
  faUserInjured,
  faBaby,
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
import { Link, NavLink, withRouter } from 'react-router-dom';
import { logOut } from '../actions';

const Navigation = props => {
  const status = props.isLoggedIn;

  const toggleSidebar = e => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('slide-right');
  };

  const handleLogOut = e => {
    toggleSidebar();
    props.logOut();
    props.history.push('/');
  };
  const active = {
    color: '#6bc774'
  };

  return (
    <>
      <div id="navigation" className="flex-row-space-between navColor">
        <div className="left flex-row-center">
          <div id="burger">
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
          </div>
          <div id="logo">
            <NavLink to="/">BABYLON RECORDS</NavLink>
          </div>
        </div>
        {status && (
          <div className="right flex-row-center">
            <div className="name">
              <p>{props.info.fullName}</p>
            </div>
            <div className="avatar">
              <img src={friend}></img>
            </div>
          </div>
        )}
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
        {status && (
          <div className="menu-item" onClick={handleLogOut}>
            <NavLink to="/login" activeStyle={active}>
              <FontAwesomeIcon icon={faBaby} />
              Log out
            </NavLink>
          </div>
        )}
        {!status && (
          <>
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
          </>
        )}
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
};

const mapsStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn, info: state.info };
};

export default connect(mapsStateToProps, { logOut })(withRouter(Navigation));