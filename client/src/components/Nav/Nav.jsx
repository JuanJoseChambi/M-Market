import React from 'react';
import './nav.css';
import Sidebar from './Sidebar.jsx';

const Nav = () => {
  return (
    <div className='nav_container'>
      <div>
        <Sidebar />
      </div>
    </div>
  )
};

export default Nav;

