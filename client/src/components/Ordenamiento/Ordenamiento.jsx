import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {allProducts, setProducts } from '../../redux/slices/productsData';
import style from './Ordenamiento.module.css';

const Ordenamiento = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    const [nombreOrden, setNombreOrden] = useState('');
    const [precioOrden, setPrecioOrden] = useState('');

    const ordenaNombre = (e) => {
        const newOrden = e.target.value;
        setNombreOrden(newOrden);

        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => {
            const comparison = a.name.localeCompare(b.name);
            return newOrden === 'asc' ? comparison : -comparison;
        });

        dispatch(setProducts(sortedProducts));
    };

    const ordenaPrecio = (e) => {
        const newOrden = e.target.value;
        setPrecioOrden(newOrden);

        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => {
            return newOrden === 'asc' ? a.price - b.price : b.price - a.price;
        });

        dispatch(setProducts(sortedProducts));
    };

    const reset = () => {
        setNombreOrden('');
        setPrecioOrden('');
        dispatch(allProducts())        
    };

    return (
        <div className={style.container}>
    <div className={style.selectContainer}>
        <select
            name="ordenaNombre"
            id="ordenaNombre"
            onChange={ordenaNombre}
            value={nombreOrden}
            className={style.select}
        >
            <option value="">Nombre</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
        </select>

        <select
            name="OrdenaPrecio"
            id="OrdenaPrecio"
            onChange={ordenaPrecio}
            value={precioOrden}
            className={style.select}
        >
            <option value="">Precio</option>
            <option value="asc">Min - Max</option>
            <option value="desc">Max - Min</option>
        </select>
    </div>

    <div className={style.buttonContainer}>
        <button onClick={reset} className={style.button}>
            Restablecer
        </button>
    </div>
</div>
    )
}

export default Ordenamiento;



