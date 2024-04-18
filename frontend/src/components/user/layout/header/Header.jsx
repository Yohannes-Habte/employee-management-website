import React from 'react';
import './Header.scss';
import logo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <figure className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </figure>

      <Navbar />

      <ul className="user-account-wrapper">
        <li className="user-account">
          <Link className="link"> Register</Link>
        </li>
        <li className="user-account">
          <Link className="link"> Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
