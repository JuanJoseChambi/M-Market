import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home/Home";
import Form from "./view/Form/Form";
import axios from "axios";
axios.defaults.baseURL="http://localhost:3001";
import Detail from "./view/Detail/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
