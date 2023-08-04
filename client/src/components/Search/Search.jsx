import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, setProducts } from '../../redux/slices/productsData';
import './search.css';

const Search = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(allProducts());
    }, [dispatch]);

    const handleSearch = () => {
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        dispatch(setProducts(filteredProducts));
        console.log('Productos filtrados:', filteredProducts)
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return(
        <div className='container_nav_search'>
            <input className='nav_search_input'
            type='text' 
            placeholder='¿Qué estas buscando?'
            value={search}
            onChange={handleChange} />
            
            <div className='nav_search_button'>
                <button type='submit' className='nav_s_button' onClick={handleSearch} >
                    Buscar
                </button>
            </div>

        </div>
    )
};

export default Search;