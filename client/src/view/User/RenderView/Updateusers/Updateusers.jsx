import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Updateusers.module.css";
import Swal from "sweetalert2";

function UpDateUser() {
  const [user, setUser] = useState([]);
  const [renderUpDate, setRenderUpDate] = useState("")
  const [vision, setVision] = useState("password")
  const [updateInfoUser, setUpdateInfoUser] = useState({
      name: "",
      lastname: "",
      email: "",
      password: "",
      admin: user[0]?user[0].admin:null
    });
  
  const idUser = localStorage.getItem("userId");
  async function handlerInfoUser() {
    const { data } = await axios.get(`/user/${idUser}`);
    setUser([data]);
  }

  async function updateUser() {
    try {
      Swal.fire({
        title: "Actualizar Datos",
        text: "¿Estás seguro de Actualizar los Datos de tu Perfil?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, Actualizar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (updateInfoUser.name || updateInfoUser.lastname || updateInfoUser.email || updateInfoUser.password) {
            await axios.put(`/user/${idUser}`, updateInfoUser);
            console.log("Datos del usuario actualizados exitosamente");
            setUpdateInfoUser({
              name: "",
              lastname: "",
              email: "",
              password: "",
              admin: updateInfoUser.admin
            })
            handlerInfoUser()
          }
        }
      });
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
    }
  }

  let contentRender;
  if (renderUpDate === "name") {
    contentRender = (
      <div className={style.containerUpdate}>
        <button className={style.btnExitUpdate} onClick={() => {setRenderUpDate(""), handlerInfoUser()}}><i className='bx bx-x-circle'></i></button>
        <p className={style.textName}>¡Atención! Antes de confirmar los cambios, te recomendamos revisar detenidamente tu información actualizada. Es importante asegurarse de que los datos sean precisos y estén actualizados para garantizar una experiencia sin problemas.</p>
        <input className={style.inputUpDate} placeholder="Nombre Actualizado" type="text" onChange={(e) => setUpdateInfoUser({...updateInfoUser, name: e.target.value})}/>
        <button className={updateInfoUser.name ? style.btnUpdate : style.btnUpdateNone} onClick={() => updateUser()}>Actualizar Nombre</button>
      </div>
    )
  }
  if (renderUpDate === "lastname") {
    contentRender = (
      <div className={style.containerUpdate}>
        <button className={style.btnExitUpdate} onClick={() => {setRenderUpDate(""), handlerInfoUser()}}><i className='bx bx-x-circle'></i></button>
        <p className={style.textName}>¡Atención! Antes de confirmar los cambios, te recomendamos revisar detenidamente tu información actualizada. Es importante asegurarse de que los datos sean precisos y estén actualizados para garantizar una experiencia sin problemas.</p>
        <input className={style.inputUpDate} placeholder={"Apellido Actualizado"} type="text" onChange={(e) => setUpdateInfoUser({...updateInfoUser, lastname: e.target.value})}/>
        <button className={updateInfoUser.lastname ? style.btnUpdate : style.btnUpdateNone} onClick={() => updateUser()}>Actualizar Apellido</button>
      </div>
    )
  }
  if (renderUpDate === "email") {
    contentRender = (
      <div className={style.containerUpdate}>
        <button className={style.btnExitUpdate} onClick={() => {setRenderUpDate(""), handlerInfoUser()}}><i className='bx bx-x-circle'></i></button>
        <p className={style.textName}>¡Atención! Antes de confirmar los cambios, te recomendamos revisar detenidamente tu información actualizada. Es importante asegurarse de que los datos sean precisos y estén actualizados para garantizar una experiencia sin problemas.</p>
        <input className={style.inputUpDate} placeholder="Email Actualizado" type="text" onChange={(e) => setUpdateInfoUser({...updateInfoUser, email: e.target.value})}/>
        <button className={updateInfoUser.email ? style.btnUpdate : style.btnUpdateNone} onClick={() => updateUser()}>Actualizar Email</button>
      </div>
    )
  }
  if (renderUpDate === "password") {
    contentRender = (
      <div className={style.containerUpdate}>
        <button className={style.btnExitUpdate} onClick={() => {setRenderUpDate(""), handlerInfoUser()}}><i className='bx bx-x-circle'></i></button>
        <p className={style.textName}>¡Atención! Antes de confirmar los cambios, te recomendamos revisar detenidamente tu información actualizada. Es importante asegurarse de que los datos sean precisos y estén actualizados para garantizar una experiencia sin problemas.</p>
        <div className={style.vision}>
          <input className={style.inputUpDatePassword} placeholder="Contraseña Actualizado" type={vision} onChange={(e) => setUpdateInfoUser({...updateInfoUser, password: e.target.value})}/>
          {vision === "password"
          ? <button className={style.btnVision} onClick={() => setVision("text")}><i class='bx bx-show'></i></button>
          : <button className={style.btnVision} onClick={() => setVision("password")}><i class='bx bx-low-vision' ></i></button>}
        </div>
        <button className={updateInfoUser.password ? style.btnUpdate : style.btnUpdateNone} onClick={() => updateUser()}>Actualizar Contraseña</button>
      </div>
    )
  }
  
  useEffect(() => {
    handlerInfoUser();
  }, []);

  return (
    <div className={style.updateInfo}>
        <h2 className={style.titleSection}>Cambiar Datos</h2>
        <div className={style.user}>
          <div className={style.userNL}>
            <i className={style.textUser}>{user[0]?user[0].name:null}</i>
            <i className={style.textUser}>{user[0]?user[0].lastname:null}</i>
          </div>
          <i className={style.textUser}>{user[0]?user[0].email:null}</i>
        </div>
      {!renderUpDate? user?.map((user, i) => (
        <div key={i} className={style.optionsUpdate}>
          <div className={style.containertProperty}>
            <p className={style.propertyUpdate}>Cambiar Nombre <button onClick={() => setRenderUpDate("name")} className={style.arrow}><i className='bx bxs-chevron-right'></i></button></p>
            <i className={style.userInfo}>{user.name}</i>
          </div>
          <div className={style.containertProperty}>
            <p className={style.propertyUpdate}>Cambiar Apellido <button onClick={() => setRenderUpDate("lastname")} className={style.arrow}><i className='bx bxs-chevron-right'></i></button></p>
            <i className={style.userInfo}>{user.lastname}</i>
          </div>
          <div className={style.containertProperty}>
            <p className={style.propertyUpdate}>Cambiar Correo <button onClick={() => setRenderUpDate("email")} className={style.arrow}><i className='bx bxs-chevron-right'></i></button></p>
            <i className={style.userInfo}>{user.email}</i>
          </div>
          <div className={style.containertProperty}>
            <p className={style.propertyUpdate}>Cambiar Contraseña <button onClick={() => setRenderUpDate("password")} className={style.arrow}><i className='bx bxs-chevron-right'></i></button></p>
            <i className={style.userInfo}>********</i>
          </div>
        </div>
      )) : contentRender}
    </div>
  );
}

export default UpDateUser;
