import { Link } from 'react-router-dom';
import style from './Product.module.css';

const Product = (products) => {
    const { id, name, price, image } = products;
    return (
        <div className={style.card}>
           <Link to={`/detail/${id}`} className={`${style['text-decoration-none']}`}>
        <div className={style.cardContent}>
            <img src={image} alt="product" className={style.image} />
            <div className={style.textcenter}> {/* Agrega la clase textcenter aquí */}
                <h4>{name}</h4>
                <p>Precio: {price}</p>
                <button className={style.buttonCard}>Añadir</button>
            </div>
        </div>
    </Link>
        </div>
    );
}

export default Product;