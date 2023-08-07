import React from 'react';
import './nav.css';
import Sidebar from './Sidebar.jsx';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav_container'>
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className='search'>
        <Search />
      </div>
      <div className='nav_form_button'>
        <Link to='/form'>
          <button className='nav_f_button'>Formulario</button>
        </Link>
      </div>
      <div className='containerIcons'>
          <Link to="/favorites">
            <button className="icons"><i className='bx bx-heart'></i></button>
          </Link>
          <Link to="/cart">
            <button className="icons"><i className='bx bx-cart'></i></button>
          </Link>
          <Link to="/login">
            <button className="icons"><i className='bx bx-user-circle' ></i></button>
          </Link>
      </div>
    </div>
  )
};

export default Nav;

