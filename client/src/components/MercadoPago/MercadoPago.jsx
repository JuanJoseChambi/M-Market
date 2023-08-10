import React, { useState, useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import styles from "./MercadoPago.module.css";
import Swal from "sweetalert2";

const MercadoPago = ({ totalAmount }) => {
 
  const [preferenceId, setPreferenceId] = useState(null);
  const [fadeButton, setFadeButton] = useState(false); // Estado para controlar el desvanecimiento
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  
  useEffect(() => {
    initMercadoPago("TEST-ccf47120-6097-4b48-9ac0-ba94be0334fe");
  }, []);

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/pay", {
        description: "Compra en MMarket",
        price: totalAmount,
        quantity: 1,
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const shouldProceed = await Swal.fire({
      title: "¿Deseas continuar con el proceso de pago?",
      icon: "question",
      background: "aliceblue",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: styles.customConfirmButton, 
        title: styles.customTitleFont,
      },
    });
  
    if (shouldProceed.isConfirmed) {
      const id = await createPreference();
      if (id) {
        setPreferenceId(id);
        setShowConfirmation(false); // Ocultar la alerta de confirmación
        setPaymentCompleted(true); // Mostrar el botón de MercadoPago y ocultar el botón "Pagar"
      }
    }
  };

  return (
    <div className={styles.container}>
  <h2 className={styles.title}>Mercado Pago</h2>
  {paymentCompleted ? (
    <>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </>
  ) : (
    <button
      className={`${styles.button} ${fadeButton ? styles["fade-out"] : ""}`}
      onClick={handleBuy}
    >
      Pagar
    </button>
  )}
</div>

  );
};

export default MercadoPago;
