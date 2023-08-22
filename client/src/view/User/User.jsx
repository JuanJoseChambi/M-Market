import React, { useEffect, useState } from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import Updateusers from "./RenderView/Updateusers/Updateusers"
import Purchase from "./RenderView/Purchase/Purchase";
import SearchUser from "./RenderAdminPanel/SearchUser/SearchUser";
import ProductControl from "./RenderAdminPanel/ProductControl/ProductControl";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/productsData";
import axios from "axios";
import Statistics from "./RenderAdminPanel/Statistics/Statistics";
import CreateProduct from "./RenderAdminPanel/CreateProduct/CreateProduct";
import LogoMMarket from "../../assets/LogoMMarket.png"

function User() {
  const [renderInterface, setRenderInterface] = useState(undefined);
  const [accessAdmin, setAccessAdmin] = useState(undefined)
  const accessGmail = localStorage.getItem('gmail');
  const userId = localStorage.getItem('userId');

  const dispatch = useDispatch()

  async function handlerAdmin () {
    const {data} = await axios.get("/user");
    const admin = data.find(user => user.id === userId)
    setAccessAdmin(admin.admin)
  }

useEffect(() => {
  handlerAdmin()
  if (accessAdmin === true) {
    console.log(accessAdmin);
    setRenderInterface("AdminPanel")
  }else if(accessGmail) {
    setRenderInterface("detalles")
  }else{
    setRenderInterface("profile")
  }
},[])

  let contentRender;
  // ------------------user---------------------
  if (renderInterface === "profile") { contentRender = <Updateusers/>; }
  if (renderInterface === "detalles") { contentRender = <Purchase/>; }
  // ------------------admin--------------------
  if (renderInterface === "Statistics") {contentRender = <Statistics/>};
  if (renderInterface === "SearchUser") { contentRender = <SearchUser/> }
  if (renderInterface === "ProductControl") { contentRender = <ProductControl/> }
  if (renderInterface === "CreateProduct") { contentRender = <CreateProduct/> }

  return (
    <div className={style.viewUser}>
      <NavLink to="/home">
        <button className={style.returnBack} onClick={() => dispatch(setCurrentPage(1))}>Home</button>
      </NavLink>
      <div className={style.userSections}>
        <div className={style.logoMMarket}>
          <img className={style.imageLogo} src={LogoMMarket} alt="" />
        </div>
        {!accessAdmin
        ? (accessGmail 
          ? <>
              <button onClick={() => setRenderInterface("profile")} className={renderInterface === "profile"? style.btnsActive: style.btnsInactive}> Perfil </button>
              <button onClick={() => setRenderInterface("detalles")} className={renderInterface === "detalles"? style.btnsActive: style.btnsInactive}>Compras</button>  
            </>
          : <>
            <button onClick={() => setRenderInterface("profile")} className={renderInterface === "profile"? style.btnsActive: style.btnsInactive}> Perfil </button>
            <button onClick={() => setRenderInterface("detalles")} className={renderInterface === "detalles"? style.btnsActive: style.btnsInactive}>Compras</button> 
            </> )
        : (accessGmail
          ? <>
          <button onClick={() => setRenderInterface("detalles")} className={renderInterface === "detalles"? style.btnsActive: style.btnsInactive}>Compras</button>  
          <button onClick={() => setRenderInterface("Statistics")} className={renderInterface === "Statistics"? style.btnsActive: style.btnsInactive}>Estadisticas</button>
          <button onClick={() => setRenderInterface("SearchUser")} className={renderInterface === "SearchUser"? style.btnsActive: style.btnsInactive}>Buscar Usuario</button>
          <button onClick={() => setRenderInterface("ProductControl")} className={renderInterface === "ProductControl"? style.btnsActive: style.btnsInactive}>Productos</button>
          <button onClick={() => setRenderInterface("CreateProduct")} className={renderInterface === "CreateProduct"? style.btnsActive: style.btnsInactive}>Crear Producto</button>
            </>
          : <>
          <button onClick={() => setRenderInterface("profile")} className={renderInterface === "profile"? style.btnsActive: style.btnsInactive}> Perfil </button>
          <button onClick={() => setRenderInterface("detalles")} className={renderInterface === "detalles"? style.btnsActive: style.btnsInactive}>Compras</button> 
          <button onClick={() => setRenderInterface("Statistics")} className={renderInterface === "Statistics"? style.btnsActive: style.btnsInactive}>Estadisticas</button>
          <button onClick={() => setRenderInterface("SearchUser")} className={renderInterface === "SearchUser"? style.btnsActive: style.btnsInactive}>Buscar Usuario</button>
          <button onClick={() => setRenderInterface("ProductControl")} className={renderInterface === "ProductControl"? style.btnsActive: style.btnsInactive}>Productos</button>
          <button onClick={() => setRenderInterface("CreateProduct")} className={renderInterface === "CreateProduct"? style.btnsActive: style.btnsInactive}>Crear Producto</button>
          </>)
        } 
      </div>
      <div className={style.userInterface}>{contentRender}</div>
    </div>
  );
}
export default User;
