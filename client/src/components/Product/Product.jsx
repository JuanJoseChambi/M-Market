import { Link } from 'react-router-dom';

const Product = (products) => {
    const { id, name, description, price, image } = products;
    return (
        <div>
            <Link to={`/detail/${id}`} className='text-decoration-none'>
            <div className="card">
            <img src={image} alt="product" className='rounded'/>
                <h4 className="text-center">{name}</h4>
                <p className="text-center">Description: {description}</p>
                <p className="text-center">Price: {price}</p>
            </div>
            </Link>
        </div>
    );
}

export default Product;