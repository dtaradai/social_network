import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className={s.header}>
        <NavLink to="/">
          <img className={s.logo} src={logo} alt='logo'/>
        </NavLink>
      </header>
  )
}

export default Header;