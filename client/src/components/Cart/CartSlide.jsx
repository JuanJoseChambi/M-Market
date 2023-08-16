import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
import { BsCart4 } from "react-icons/bs";

const CartSlide = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const [showMercadoPago, setShowMercadoPago] = useState(false);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [deliveryOption, setDeliveryOption] = useState("local"); // local o delivery
  const [deliveryInfo, setDeliveryInfo] = useState({
    receiverName: "",
    deliveryAddress: "",
    contactPhone: "",
  });
  const access = localStorage.getItem("email");

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

  const isCartEmpty = cartItems.length === 0;
  const totalAmount = calculateTotal().toFixed(2);

  const idProducts = cartItems.map((producto) => producto.id);
  const idUser = localStorage.getItem("userId");

  const purchase = {
    monto: totalAmount,
    userId: idUser,
    prodId: idProducts,
  };

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };

  const handleDeliveryInfoChange = (field, value) => {
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleGoToPayment = async () => {
    if (deliveryOption === "delivery") {
      if (
        !deliveryInfo.receiverName ||
        !deliveryInfo.deliveryAddress ||
        !deliveryInfo.contactPhone
      ) {
        Swal.fire(
          "Campos incompletos",
          "Por favor completa todos los campos de entrega.",
          "error"
        );
        return;
      }
    }
    Swal.fire({
      title: "Confirmar compra",
      text: "¿Estás seguro de proceder con la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff8000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, proceder",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setShowMercadoPago(true);
      }
    });
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem("PurchaseInfo", JSON.stringify(purchase));

    if (savedCart) {
      savedCart.forEach((item) => {
        // Verifica si el elemento ya está en el carrito actual
        const isItemInCart = cartItems.some(
          (cartItem) => cartItem.id === item.id
        );
        if (!isItemInCart) {
          dispatch(addToCart(item));
        }
      });
    }
  }, [cartItems, dispatch]);

  return (
    <div className="cartSlide_container">
      <div className="cartSlide_allItems">
        <h1 className="cartSlide_title">
          <BsCart4 className="svg" /> Mi Carrito
        </h1>
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
        <div className="delivery_option">
          <label className="delivery_option_label">
            <input
              type="radio"
              value="local"
              checked={deliveryOption === "local"}
              onChange={() => handleDeliveryOptionChange("local")}
            />
            Retirar en local
          </label>

          <label className="delivery_option_label">
            <input
              type="radio"
              value="delivery"
              checked={deliveryOption === "delivery"}
              onChange={() => handleDeliveryOptionChange("delivery")}
            />
            Enviar a domicilio
          </label>
        </div>

        {deliveryOption === "delivery" && (
          <div className="delivery_form">
            <h2>Datos de Entrega</h2>
            <label className="delivery_label">
              Nombre de quien recibe
              <input
                type="text"
                placeholder="Nombre de quien recibe"
                value={deliveryInfo.receiverName}
                onChange={(e) =>
                  handleDeliveryInfoChange("receiverName", e.target.value)
                }
                className="delivery_input"
              />
            </label>
            <label className="delivery_label">
              Dirección de entrega
              <input
                type="text"
                placeholder="Dirección de entrega"
                value={deliveryInfo.deliveryAddress}
                onChange={(e) =>
                  handleDeliveryInfoChange("deliveryAddress", e.target.value)
                }
                className="delivery_input"
              />
            </label>
            <label className="delivery_label">
              Teléfono de contacto
              <input
                type="text"
                placeholder="Teléfono de contacto"
                value={deliveryInfo.contactPhone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, ""); // Elimina cualquier carácter que no sea número
                  handleDeliveryInfoChange("contactPhone", onlyNumbers);
                }}
                className="delivery_input"
                pattern="[0-9]*" // Asegura que solo se ingresen números
              />
            </label>
          </div>
        )}

        <div className="buttons_cart_container">
          <button onClick={handleClearCart} className="button_clear_cart">
            Vaciar Carrito
          </button>
          <div className="cartSlide_link">
            {!isCartEmpty && totalAmount > 0 && access ? (
              <button
                className={`go_to_pay ${
                  deliveryOption === "delivery" &&
                  (!deliveryInfo.receiverName ||
                    !deliveryInfo.deliveryAddress ||
                    !deliveryInfo.contactPhone)
                    ? "disabled"
                    : "enabled"
                }`}
                onClick={handleGoToPayment}
              >
                Ir a Pago
              </button>
            ) : (
              <NavLink to="/login">
                <button className="go_to_pay">Ir a Pago</button>
              </NavLink>
            )}
          </div>
        </div>

        <br />

        {showMercadoPago && <MercadoPago totalAmount={totalAmount} />}
      </div>
    </div>
  );
};

export default CartSlide;
