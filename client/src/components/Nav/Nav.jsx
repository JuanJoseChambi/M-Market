import './nav.css';
import Sidebar from './Sidebar.jsx';
import Search from '../Search/Search';
import LogOut from '../../view/Login/Logout.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CartSlide from '../Cart/CartSlide';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/productsData';
import LogoMMarket from "../../assets/LogoMMarket.png"

const Nav = () => {
  const { cart } = useSelector((state) => state.products);

  const prod = cart.length;
  const [productsInCart, setProductsInCart] = useState(prod);
  const [openedCart, setOpenedCart] = useState(false);
 
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  const access = localStorage.getItem("email");
  const showCart = () => {
    setOpenedCart(!openedCart);
    localStorage.removeItem("PurchaseInfo")
    localStorage.removeItem("preferenceMP")
  };
  useEffect(() => {
    setProductsInCart(prod);
  }, [prod]);

  // console.log(productsInCart);
  return (
    <div>
   
    <div className="nav_container">
    
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="logoMMarket">
          <Link to='/home'>
            <img className="imageLogo" src={LogoMMarket} alt="M-Market" />
          </Link>
        </div>
      <div className="search">
        <Search />
      </div>
      <div className="containerIcons">
        <Link to="#">
          <button className="icons" onClick={showCart}>
            <i className="bx bx-cart"></i>
            {productsInCart === 0 ? null : (
              <div className="NumberInCart">{productsInCart}</div>
            )}
          </button>
        </Link>
        <div className={openedCart ? "cart_menu active" : "cart_menu"}>
          <Link to="#" onClick={showCart} className="cart_menu_close">
            <AiOutlineClose />
          </Link>
          {openedCart && <CartSlide />}
        </div>
        {access ? (
    <Link to="/user">
      <button onClick={() => dispatch(setCurrentPage(1))} className="icons user-button">
        <i className="bx bx-user"></i>
      </button>
    </Link>
  ) : (
    <Link to="/login">
      <button className="icons">
        <i className="bx bx-user-circle"></i>
      </button>
    </Link>
  )}
  {access && <span className="username-message">🟢 {access}</span>}
  {access && <LogOut />}
      </div>
    </div>
    </div>
  );
};

export default Nav;
