import React, { useEffect, useState } from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import Updateusers from "./RenderView/Updateusers/Updateusers"
import Purchase from "./RenderView/Purchase/Purchase";

function User() {
  const [renderInterface, setRenderInterface] = useState("profile");

  let contentRender;
  if (renderInterface === "profile") {
    contentRender = <Updateusers/>;
  }
  if (renderInterface === "detalles") {
    contentRender = <Purchase/>;
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
