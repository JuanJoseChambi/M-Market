import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import styles from "./MercadoPago.module.css";

const MercadoPago = () => {

    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago("TEST-44f8df85-57a1-40e8-9c93-e679cc6427cb");

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
        }
      };


  return (
    <div>
          <button className={styles.buttonMP} onClick={handleBuy}>Pagar</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
    
    </div>
  )
}

export default MercadoPago