import React, { useState, useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import styles from "./MercadoPago.module.css";

const MercadoPagoButton = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [fadeButton, setFadeButton] = useState(false); // Estado para controlar el desvanecimiento

  useEffect(() => {
    initMercadoPago("TEST-ccf47120-6097-4b48-9ac0-ba94be0334fe");
  }, []);

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/pay", {
        description: "Bananita contenta",
        price: 100,
        quantity: 1,
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      setFadeButton(true); // Activar el desvanecimiento al hacer clic en el botón
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mercado Pago</h2>
      <button
        className={`${styles.button} ${fadeButton ? styles["fade-out"] : ""}`} // Aplicar la clase de desvanecimiento si se activa
        onClick={handleBuy}
      >
        Pagar
      </button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default MercadoPagoButton;
