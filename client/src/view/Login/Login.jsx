import { useEffect, useState } from 'react';
import { auth, provider } from '../../components/GoogleAuth/firebase';
import { signInWithPopup } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      setUserEmail(email);
      localStorage.setItem('email', email);
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

  return (
    <div className='container-login'>
      <NavLink to="/home">
        <button className="returnBack">Home</button>
      </NavLink>
      <div className="Auth-form">
      <form>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingrese email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Submit
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
          <i className="bi bi-google"> Sign</i>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Login;
