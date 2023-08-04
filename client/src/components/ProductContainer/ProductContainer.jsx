
import Product from "../Product/Product";
import { useSelector } from "react-redux";

const ProductContainer = () => {
    const { products } = useSelector((state) => state.products);

    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <Product {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductContainer;