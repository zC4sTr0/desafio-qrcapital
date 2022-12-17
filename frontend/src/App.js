import Login from "./pages/Login/index";
import Register from "./pages/Register/register";
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
