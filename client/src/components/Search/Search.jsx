import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allProducts, searchName, setCurrentPage } from '../../redux/slices/productsData';
import './search.css';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(allProducts());
    }, [dispatch]);

    function handleSearch (search) {
        dispatch(setCurrentPage(1))
        dispatch(searchName(search));
    };

    const handleChange = (e) => {
        const name = e.target.value
        if (name) {
            setSearch(name);
            dispatch(searchName(search));
        }else{
            setSearch(null)
            dispatch(searchName(null))
        }
    };

    return(
        <div className='container_nav_search'>
            <input className='nav_search_input'
            type='text' 
            placeholder='¿Qué estas buscando?'
            value={search}
            onChange={handleChange} />
            
            <div className='nav_search_button'>
                <button type='submit' className='nav_s_button' onClick={() => handleSearch(search)} >
                    Buscar
                </button>
            </div>

        </div>
    )
};

export default Search;