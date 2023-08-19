import React, { useEffect, useState } from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import Updateusers from "./RenderView/Updateusers/Updateusers"
import Purchase from "./RenderView/Purchase/Purchase";
import AdminPanel from "./RenderAdminPanel/AdminPanel";
import SearchUser from "./RenderAdminPanel/SearchUser/SearchUser";
import ProductControl from "./RenderAdminPanel/ProductControl/ProductControl";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/productsData";

function User() {
  const [renderInterface, setRenderInterface] = useState(undefined);
  const accessAdmin = localStorage.getItem('adminId');
  const dispatch = useDispatch()

useEffect(() => {
  if (accessAdmin) {
    setRenderInterface("AdminPanel")
  }else{
    setRenderInterface("profile")
  }
},[])

  let contentRender;
  // ------------------user---------------------
  if (renderInterface === "profile") { contentRender = <Updateusers/>; }
  if (renderInterface === "detalles") { contentRender = <Purchase/>; }
  // ------------------admin--------------------
  if (renderInterface === "AdminPanel") { contentRender = <AdminPanel/> }
  if (renderInterface === "SearchUser") { contentRender = <SearchUser/> }
  if (renderInterface === "ProductControl") { contentRender = <ProductControl/> }
  
  return (
    <div className={style.viewUser}>
      <NavLink to="/home">
        <button className={style.returnBack} onClick={() => dispatch(setCurrentPage(1))}>Home</button>
      </NavLink>
      <div className={style.userSections}>
        {!accessAdmin
        ? <>
            <button onClick={() => setRenderInterface("profile")} className={renderInterface === "profile"? style.btnsActive: style.btnsInactive}> Perfil </button>
            <button onClick={() => setRenderInterface("detalles")} className={renderInterface === "detalles"? style.btnsActive: style.btnsInactive}>Compras</button> 
          </> 
        : <>
            <button onClick={() => setRenderInterface("AdminPanel")} className={renderInterface === "AdminPanel"? style.btnsActive: style.btnsInactive}>Panel de Admin</button>
            <button onClick={() => setRenderInterface("SearchUser")} className={renderInterface === "SearchUser"? style.btnsActive: style.btnsInactive}>Buscar Usuario</button>
            <button onClick={() => setRenderInterface("ProductControl")} className={renderInterface === "ProductControl"? style.btnsActive: style.btnsInactive}>Productos</button>
          </> 
        } 
      </div>
      <div className={style.userInterface}>{contentRender}</div>
    </div>
  );
}
// admin@admin.admin
export default User;
