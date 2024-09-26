import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Register from "./pages/Resgiter/Resgiter";
import Login from "./pages/Login/Login";
import { Vagas } from "./pages/Vagas/Vagas";
import HomeLogin from "./pages/Home/HomeLogin";
import {User} from "./pages/user/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/HomeLogin" element={<HomeLogin />} />
        <Route path="/Perfil" element={<User />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}


export default App;
