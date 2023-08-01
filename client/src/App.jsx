import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home/Home";
import Form from "./view/Form/Form";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
