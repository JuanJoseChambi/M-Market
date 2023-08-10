import './nav.css';
import Sidebar from './Sidebar.jsx';
import Search from '../Search/Search';
import LogOut from '../../view/Login/Logout.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CartSlide from '../Cart/CartSlide';

const Nav = () => {

  const[openedCart, setOpenedCart] = useState(false);
  const showCart = () => {
    setOpenedCart(!openedCart);
  };

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
          <Link to="#">
            <button className="icons" onClick={showCart}><i className='bx bx-cart'></i></button>
          </Link>
          <div className={openedCart ? 'cart_menu active' : 'cart_menu'}>
            <Link to='#' onClick={showCart} className='cart_menu_close'>
              <AiOutlineClose />
            </Link>
            {openedCart && <CartSlide/>}
          </div>
          <Link to="/login">
            <button className="icons"><i className='bx bx-user-circle' ></i></button>
          </Link>
          <LogOut />
      </div>
    </div>
  )
};

export default Nav;

