import { Route, Routes, Link } from "react-router-dom";
import Home  from "./pages/Home"
import About from "./pages/About"
import Products  from "./pages/Products";
import Login from "./pages/Login" 

function App() {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
  </Routes>; 
}

export default App;
