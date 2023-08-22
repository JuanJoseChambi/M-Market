import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home/Home";
import Form from "./view/Form/Form";
import ReviewForm from "./view/ReviewForm/ReviewForm";
import axios from "axios";
axios.defaults.baseURL="m-market-production.up.railway.app";
import Detail from "./view/Detail/Detail";
import Login from "./view/Login/Login";
import CreateAccount from "./view/Login/CreateAccount";
import User from "./view/User/User";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/form" element={<Form/>}/>
        {/*<Route exact path='/reviews' element={<ReviewForm/>}/>*/}
        <Route exact path="/detail/:id" element={<Detail/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/createAccount" element={<CreateAccount/>}/>
        <Route exact path="/user" element={<User/>}/>
        <Route exact path="/nosotros" element={<Nosotros/>} />
      </Routes>
    </div>
  );
}

export default App;
