import Login from "./pages/login.js";
import Register from "./pages/register.js";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

var isLogined = false;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
