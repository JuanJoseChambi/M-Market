import React, { useState } from 'react';
import axios from 'axios';
import styles from './Delivery.module.css';
const Delivery = () => {
  const [deliveryData, setDeliveryData] = useState(null);

  const handleFetchDelivery = async () => {
    try {
      
      const response = await axios.get('/delivery', {
        params: {
          userEmail: 'it.sergiorodriguez@gmail.com', // Reemplaza esto con el email del usuario logueado
          deliveryType: 'delivery', // Puedes ajustar esto si necesitas diferentes tipos de entrega
        },
      });

    console.log(setDeliveryData(response.data));
    } catch (error) {
      console.error('Error fetching delivery data:', error);
    }
  };

  return (
    <div className={styles.deliveryContainer}>
      <button className={styles.fetchButton} onClick={handleFetchDelivery}>
        Obtener Pedido de Entrega
      </button>
      {deliveryData && (
        <div className={styles.deliveryDetails}>
          <h2>Detalles del Pedido de Entrega:</h2>
          <p>ID: {deliveryData.id}</p>
          <p>Receptor: {deliveryData.receives}</p>
          <p>Dirección: {deliveryData.address}</p>
          <p>Teléfono: {deliveryData.phone}</p>
          <p>Recogida: {deliveryData.pickUp ? 'Sí' : 'No'}</p>
          <p>Entrega: {deliveryData.delivery ? 'Sí' : 'No'}</p>
          {/* Mostrar más detalles aquí */}
          <p>Usuario de Entrega: {deliveryData.UserDelivery}</p>
          <p>Usuario: {deliveryData.User.email}</p>
        </div>
      )}
    </div>
  );
};

export default Delivery;
