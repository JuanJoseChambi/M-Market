import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import styles from "./MercadoPago.module.css";

const MercadoPago = () => {

    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago("TEST-cd3fd0b1-2d7b-4a77-9254-b61d43fa1c4e");

    const createPreference = async () => {
        try {
          const response = await axios.post("http://localhost:8080/create_preference", {
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