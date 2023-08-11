import { useEffect, useState } from 'react';
import { auth, provider } from '../../components/GoogleAuth/firebase';
import { signInWithPopup } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { loginSuccess } from '../../redux/slices/userAuth';
import { useDispatch } from 'react-redux';
import img1 from '../../assets/error.png';
import img2 from '../../assets/check.png';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      setUserEmail(email);
      localStorage.setItem('email', email);
      dispatch(loginSuccess());
      navigate('/home');
      await axios.post("/notification/register", {email: email})
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleEmailLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:3001/user/login', {
      email,
      password,
    });

    const success = response.data;

    if (success) {
      await Swal.fire({
        title: `Usuario ${email} login exitoso`,
        imageUrl: img2,
        imageWidth: 100,
        imageHeight: 100,
        confirmButtonText: "Aceptar",
        background: "white",
        width: "40%",
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
          localStorage.setItem('email', email);
          dispatch(loginSuccess());
          navigate('/home');
        }
      });
    } else {
      Swal.fire({
        title: "Error al iniciar sesión, verifique sus credenciales!",
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
    }
  } catch (error) {
    Swal.fire({
      title: "Complete todos los campos!",
      imageUrl: img1,
      imageWidth: 100,
      imageHeight: 100,
      background: "white",
      width: "30%",
      buttonsStyling: false,
      confirmButtonText: "Aceptar",
      customClass: {
        title: "mesageAlert",
        confirmButton: "buttonAlert",
      },

    });
  }
};

  return (
    <div className='container-login'>
      <NavLink to="/home">
        <button className="returnBack">Home</button>
      </NavLink>
      <div className="Auth-form">
      <form onSubmit={handleEmailLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar Sesión</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingrese email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Enviar
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          <NavLink to="/createAccount" className='createAccount'>
             Crear Cuenta
          </NavLink>
          </p>
        </div>
      </form>
      <div className='container-google'>
        <button className="icons" onClick={handleLogin}>
          <i className="bi bi-google"> Inicio Sesión</i>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Login;
