import { useEffect } from "react"
import io from "socket.io-client"

function Notificaciones() {

    const socket = io("/")

    useEffect(() => {   
        socket.emit("notificaciones", data)
    }, [])

  return (
    <div>Notificaciones</div>
  )
}

export default Notificaciones