import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
        <NavLink to="/">
          <img className={s.logo} src={logo} alt='logo'/>
        </NavLink>
        <div className={s.loginBlock}>
          {
            props.isAuth ? props.login 
              : <NavLink to={'/login'}>Login</NavLink>
          }
        </div>
      </header>
  )
}

export default Header;