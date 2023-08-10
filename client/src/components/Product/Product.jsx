import { Link } from 'react-router-dom';
import style from './Product.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/productsData';

const Product = (products) => {
    const { id, name, price, image } = products;

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(products));
    };

    return (
        <div className={style.card}>
           <Link to={`/detail/${id}`} className={`${style['text-decoration-none']}`}>
                <div className={style.cardContent}>
                    <img src={image} alt="product" className={style.image} />
                    <div className={style.textcenter}> {/* Agrega la clase textcenter aquí */}
                        <h4>{name}</h4>
                        <p>Precio: {price}</p>
                    </div>
                </div>
            </Link>
            <button className={style.buttonCard} onClick={handleAddToCart}>Añadir</button>
        </div>
    );
}

export default Product;