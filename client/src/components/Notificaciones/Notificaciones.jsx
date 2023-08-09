import { useEffect } from "react"
import io from "socket.io-client"

function Notificaciones() {

    const socket = io("/")
    // socket.emit("feedbacks", feedBack) para enviar al server de socket.io, con el nombre de referencia y el dato que se envia,
    // el cual era un estado en otro codigo. 
    useEffect(() => {   
        socket.emit("notificaciones", data)
    }, [])

  return (
    <div>Notificaciones</div>
  )
}

export default Notificaciones