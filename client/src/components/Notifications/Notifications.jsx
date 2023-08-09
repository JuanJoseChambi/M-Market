import io from "socket.io-client"
import style from "./Notifications.module.css"

export default function Notifications() {

    const socket = io("/")

    /*                  -----------------------Envio de info----------------------------------------
      | socket.emit("feedbacks", feedBack); | para enviar al server de socket.io, con el nombre de referencia y el dato que se envia,
     el cual era un estado en otro codigo. 
    |                   ------------------------Recibo de info--------------------------------------
    Este codigo recibe la informacion y desde el servidor se configura si se quiere enviar a todos los usuarios o que no 
    lo vea el usuario pero los demas si(configuracion).
    en la data llega el mensje del servidor, para que se pueda almacenar en un estado si se quiere. por ejemplo en este caso se 
    setea setFeedbacks.
        | socket.on("feedbackadmin", (data) => {  
           console.log(data);
      setFeedbacks((prevFeedbacks) => [...prevFeedbacks, data]);
    });

    */

  return (
    <div className={style.viewNotifications}>
      <div className={style.notifications}>
          Notifications
      </div>
      <div className={style.notifications}>
          Notifications
      </div>
    </div>
  )
}
