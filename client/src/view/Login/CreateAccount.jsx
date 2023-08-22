import { NavLink } from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2";
import "./CreateAccount.css"
import img1 from '../../assets/error.png';
import img2 from '../../assets/check.png';


const CreateAccount = () => {
   
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });


  const redirectToLogin = () => {
    window.location.href = "/login"; // Ajusta la ruta según tu estructura
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user", formData);
      await Swal.fire({
        title: `Usuario ${formData.email} creado con éxito`,
        imageUrl: img2,
        imageWidth: 100,
        imageHeight: 100,
        confirmButtonText: "Aceptar",
        background: "white",
          width: "30%",
          heightAuto: false,
          height: "1%",
          padding: "3rem",
          buttonsStyling: false,
          customClass: {
            title: "mesageAlert",
            confirmButton: "buttonAlert",
          },
      }).then((result) => {
        if (result.isConfirmed) {
          redirectToLogin();
        }
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        Swal.fire({
          title: "Error al crear usuario!",
          text: error.response.data.error,
          imageUrl: img1,
          imageWidth: 100,
          imageHeight: 100,
          background: "white",
          width: "30%",
          heightAuto: false,
          height: "1%",
          padding: "3rem",
          buttonsStyling: false,
          confirmButtonText: "Aceptar",
          customClass: {
            title: "mesageAlert",
            confirmButton: "buttonAlert",
          },
        });
      } else {
        Swal.fire({
          title: "Error al crear usuario!",
          imageUrl: img1,
          imageWidth: 100,
          imageHeight: 100,
          background: "white",
          width: "30%",
          heightAuto: false,
          height: "1%",
          padding: "3rem",
          buttonsStyling: false,
          customClass: {
            title: "mesageAlert",
            confirmButton: "buttonAlert",
          },
        });
      }
      setFormData({ 
        name: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

    return (
        <div className='container-login'>
      <NavLink to="/home">
        <button className="returnBack">Home</button>
      </NavLink>
      <div className="Auth-form">
      <form onSubmit={handleSubmit} >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registro de Usuario</h3>
          <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ej: Jorge"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ej: Perez"
              value={formData.lastname}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingresar email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingresar password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Enviar
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          </p>
        </div>
      </form>
      </div>
    </div>
    )
}

export default CreateAccount