import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { setProducts } from '../../redux/slices/productsData';
import './nav.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    const filterCategory = (filterProducts) => {
        return products.filter((product) => product.Categories.some(category => category.name === filterProducts));
    };

    const handleFilter = (selectedCategory) => {
        const filteredProducts = filterCategory(selectedCategory);
        dispatch(setProducts(filteredProducts));
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
