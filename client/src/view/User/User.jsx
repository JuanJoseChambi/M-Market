import React, { useState } from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function User() {
  const [renderInterface, setRenderInterface] = useState("profile");
  const [infoUser, setInfoUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { idUser } = useSelector((state) => state.auth);
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

  let contentRender;
  if (renderInterface === "profile") {
    contentRender = (
      <div className={style.updateInfo}>
        <h2 className={style.titleSection}>Cambiar Datos</h2>
        <form className={style.form} onSubmit={updateUser}>
          <div className={style.blocksInputs}>
            <label>Nombre</label>
            <input
              className={style.inputs}
              type="text"
              value={infoUser.name}
              onChange={(e) =>
                setInfoUser({ ...infoUser, name: e.target.value })
              }
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
          <button className={style.updateBtn}>
            Actualizar
          </button>
        </form>
      </div>
    );
  }

  
  if (renderInterface === "detalles") {
    contentRender = (
        <div className={style.updateInfo}>
            <h2 className={style.titleSection}>Compras Realizadas</h2>

        </div>
    )
  }
  return (
    <div className={style.viewUser}>
      <NavLink to="/home">
        <button className={style.returnBack}>Home</button>
      </NavLink>
      <div className={style.userSections}>
        <button onClick={() => setRenderInterface("profile")} className={renderInterface === "profile"? style.btnsActive: style.btnsInactive}>
          Perfil
        </button>
        <button onClick={() => setRenderInterface("detalles")} className={renderInterface === "detalles"? style.btnsActive: style.btnsInactive}>
          Compras
        </button>
      </div>
      <div className={style.userInterface}>{contentRender}</div>
    </div>
  );
}

export default User;
