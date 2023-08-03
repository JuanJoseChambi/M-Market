import Product from "../Product/Product";

const ProductContainer = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "This is product 1",
            price: 100,
            image: "https://picsum.photos/200/200"
        },
        {
            id: 2,
            name: "Product 2",
            description: "This is product 2",
            price: 200,
            image: "https://picsum.photos/200/200"
        },
        {
            id: 3,
            name: "Product 3",
            description: "This is product 3",
            price: 300,
            image: "https://picsum.photos/200/200"
        },
        {
            id: 4,
            name: "Product 4",
            description: "This is product 4",
            price: 400,
            image: "https://picsum.photos/200/200"
        },
        {
            id: 5,
            name: "Product 5",
            description: "This is product 5",
            price: 500,
            image: "https://picsum.photos/200/200"
        },
    ];

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