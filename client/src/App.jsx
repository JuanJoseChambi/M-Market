import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home/Home";

function App() {
  return (
    <div>
      <div>App</div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
