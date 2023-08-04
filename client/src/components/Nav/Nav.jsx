import React from 'react';
import './nav.css';
import Sidebar from './Sidebar.jsx';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav_container'>
      <div>
        <Sidebar />
      </div>
      <div>
        <Search />
      </div>
      <div className='nav_form_button'>
        <Link to='/form'>
          <button className='nav_f_button'>Formulario</button>
        </Link>
      </div>
    </div>
  )
};

export default Nav;

