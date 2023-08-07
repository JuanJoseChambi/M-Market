import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { allProducts, setProducts } from '../../redux/slices/productsData';
import { setFiltred, setCurrentPage } from '../../redux/slices/productsData';
import './nav.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const dispatch = useDispatch();

    const handleFilter = (selectedCategory) => {
        dispatch(setFiltred(selectedCategory));
        dispatch(setCurrentPage(1))
    };

    return (
        <>
            <div className='sidebar_container'>
                <Link to='#' className='menu_bars'>
                    <AiOutlineMenu onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav_menu active' : 'nav_menu'}>
                <ul className='nav_menu_items' onClick={showSidebar}>
                    <li className='navbar_toggle'>
                        <Link to='#' className='menu_bars'>
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => (
                        <li key={index} className={item.className}>
                            <button
                                className='sidebar_button'
                                onClick={() => handleFilter(item.title)}
                            >
                                <span>{item.title}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
