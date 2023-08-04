import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

const Search = () => {

    return(
        <div className='container_nav_search'>
            <input className='nav_search_input'
            type='text' 
            placeholder='¿Qué estas buscando?' />
            
            <div className='nav_search_button'>
                <button type='submit' className='nav_s_button'>
                    Buscar
                </button>
            </div>
        </div>
    )
};

export default Search;