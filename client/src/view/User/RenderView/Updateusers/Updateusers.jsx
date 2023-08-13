import React, { useState } from "react";
import axios from "axios";
import style from "./Updateusers.module.css"

function UpDateUser() {
    const [infoUser, setInfoUser] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
      });

  const idUser = localStorage.getItem('userId');

  async function updateUser(e) {
    e.preventDefault();
    try {
      // Hacer la solicitud PUT para actualizar los datos del usuario
      await axios.put(`/user/${idUser}`, infoUser);
      console.log("Datos del usuario actualizados exitosamente");
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
    }
  }

  return (
    <div className={style.updateInfo}>
      <h2 className={style.titleSection}>Cambiar Datos</h2>
      <form className={style.form} onSubmit={updateUser}>
        <div className={style.blocksInputs}>
          <label>Nombre</label>
          <input
            className={style.inputs}
            type="text"
            value={infoUser.name}
            onChange={(e) => setInfoUser({ ...infoUser, name: e.target.value })}
          />
        </div>
        <div className={style.blocksInputs}>
          <label>Apellido</label>
          <input
            className={style.inputs}
            type="text"
            value={infoUser.lastname}
            onChange={(e) =>
              setInfoUser({ ...infoUser, lastname: e.target.value })
            }
          />
        </div>
        <div className={style.blocksInputs}>
          <label>Correo</label>
          <input
            className={style.inputs}
            type="text"
            value={infoUser.email}
            onChange={(e) =>
              setInfoUser({ ...infoUser, email: e.target.value })
            }
          />
        </div>
        <div className={style.blocksInputs}>
          <label>Contraseña</label>
          <input
            className={style.inputs}
            type="password"
            value={infoUser.password}
            onChange={(e) =>
              setInfoUser({ ...infoUser, password: e.target.value })
            }
          />
        </div>
        <button className={style.updateBtn}>Actualizar</button>
      </form>
    </div>
  );
}

export default UpDateUser;
