import React, { useState } from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import Updateusers from "./RenderView/Updateusers/Updateusers"
import Purchase from "./RenderView/Purchase/Purchase";
import AdminPanel from "./RenderAdminPanel/AdminPanel";

function User() {
  const [renderInterface, setRenderInterface] = useState("profile");
  const accessAdmin = localStorage.getItem('email');


  let contentRender;
  if (renderInterface === "profile") {
    contentRender = <Updateusers/>;
  }
  if (renderInterface === "detalles") {
    contentRender = <Purchase/>;
  }
  if (renderInterface === "AdminPanel") {
    contentRender = <AdminPanel/>
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
        {accessAdmin === "admin@admin.admin"
        ?(<button onClick={() => setRenderInterface("AdminPanel")} className={renderInterface === "AdminPanel"? style.btnsActive: style.btnsInactive}>
          Panel de Admin
          </button>)
        :null } 
      </div>
      <div className={style.userInterface}>{contentRender}</div>
    </div>
  );
}
// admin@admin.admin
export default User;
