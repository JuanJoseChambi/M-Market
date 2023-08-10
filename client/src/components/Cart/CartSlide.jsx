import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../../redux/slices/productsData';
import './cartslide.css';
import MercadoPago from "../MercadoPago/MercadoPago"
const CartSlide = () => {

    const cartItems = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();
    const [showMercadoPago, setShowMercadoPago] = useState(false);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            savedCart.forEach(item => {
                dispatch(addToCart(item));
            });
        }
    }, [dispatch]);

    const handleIncrement = (item) => {
        dispatch(incrementQuantity(item.id));
    };

    const handleDecrement = (item) => {
        if(item.unit > 1) {
            dispatch(decrementQuantity(item.id));
        };
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart(item.id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const subtotal = (item) => {
        return item.price * item.unit;
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + subtotal(item), 0);
    };

    return(
        <div className='cartSlide_container'>
            <div className='cartSlide_allItems'>
                <h1 className='cartSlide_title'>Mi Carrito</h1>
                <div className='cartSlide_items'>
                    <ul>
                        {cartItems?.map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} className='cartSlide_item_image' />
                                <div className='cartSlide_item_details'>
                                    <p className='cartSlide_item_name'>{item.name}</p>
                                    <p className='cartSlide_item_price'>Precio: ${item.price}</p>
                                </div>
                                <div className='inc_dec'>
                                    <div className='buttons'>
                                        <button onClick={() => handleDecrement(item)}>-</button>    
                                        <span>{item.unit}</span>
                                        <button onClick={() => handleIncrement(item)}>+</button>
                                        <button onClick={() => handleRemove(item)}>Eliminar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='cartSlide_total'>
                    <p>Total: ${calculateTotal().toFixed(2)}</p>
                    <button onClick={handleClearCart} className='button_clear_cart'>Vaciar Carrito</button>
                </div>
                <div className='cartSlide_link'>
                   <button className='go_to_cart' onClick={() => setShowMercadoPago(true)}>
                         Ir a Pago
                     </button>
                </div>
                {showMercadoPago && (
                    <MercadoPago />
                    )}
            </div>
        </div>
    );
};

export default CartSlide;