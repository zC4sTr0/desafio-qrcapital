import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
