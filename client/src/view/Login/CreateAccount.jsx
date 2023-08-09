import { NavLink } from "react-router-dom"

const CreateAccount = () => {
    return (
        <div className='container-login'>
      <NavLink to="/home">
        <button className="returnBack">Home</button>
      </NavLink>
      <div className="Auth-form">
      <form>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Nombre Completo</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ej: Jorge Perez"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingresar email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingresar password"
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