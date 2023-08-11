import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/slices/productsData";
import "./cartslide.css";
import MercadoPago from "../MercadoPago/MercadoPago";
import Swal from "sweetalert2";
import { BsCart4 } from 'react-icons/bs';

  const CartSlide = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const [showMercadoPago, setShowMercadoPago] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      savedCart.forEach((item) => {
        // Verifica si el elemento ya está en el carrito actual
        const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
        if (!isItemInCart) {
          dispatch(addToCart(item));
        }
      });
    }
  }, [cartItems, dispatch]);
  

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = (item) => {
    if (item.unit > 1) {
      dispatch(decrementQuantity(item.id));
    } else {
      // Mostrar el diálogo de confirmación
      Swal.fire({
        title: "Eliminar artículo",
        text: "¿Estás seguro de eliminar este artículo del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeFromCart(item.id));
        }
      });
    }
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

  if (isAuthenticated === undefined) {
    return null; // O podrías mostrar un spinner de carga u otro indicador
  }

  const isCartEmpty = cartItems.length === 0;
  const totalAmount = calculateTotal();

  const handleGoToPayment = () => {
    // Mostrar el diálogo de confirmación
    Swal.fire({
      title: "Confirmar compra",
      text: "¿Estás seguro de proceder con la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff8000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, proceder",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setShowMercadoPago(true);
      }
    });
  };

  return (
    <div className="cartSlide_container">
      <div className="cartSlide_allItems">
        <h1 className="cartSlide_title"><BsCart4 className="svg"/> Mi Carrito</h1>
        <hr />
        <div className="cartSlide_items">
          <ul>
            {cartItems?.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cartSlide_item_image"
                />
                <div className="cartSlide_item_details">
                  <p className="cartSlide_item_name">{item.name}</p>
                  <p className="cartSlide_item_price">Precio: ${item.price}</p>
                </div>
                <div className="inc_dec">
                  <div className="buttons">
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
        
        <div className="cartSlide_total">
          <p>Total: ${calculateTotal().toFixed(2)}</p>
        </div>
        <div className="buttons_cart_container">
          <button onClick={handleClearCart} className="button_clear_cart">
              Vaciar Carrito
          </button>
          <div className="cartSlide_link">
              {!isCartEmpty && totalAmount > 0 && isAuthenticated && (
              <button
                className="go_to_cart"
                onClick={handleGoToPayment}
              >
                Ir a Pago
              </button>
            )}
          </div>
        </div>

        <br />

        {showMercadoPago && <MercadoPago totalAmount={totalAmount}  />}
      </div>
    </div>
  );
};

export default CartSlide;