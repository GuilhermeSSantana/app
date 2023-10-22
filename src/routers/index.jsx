import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import Inicial from "../Pages/Inicial";
import Header from "../common/Header";
import Bancos from "../Pages/Bancos";
import Ganhos from "../Pages/Ganhos";
import Criar from "../Pages/Bancos/Criar";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Header />} />
        <Route path="/Ganhos" element={<Ganhos />} />
        <Route path="/Gastos" element={<Inicial />} />
        <Route path="/Bancos" element={<Bancos />} />
        <Route path="/Bancos/criar" element={<Criar />} />

        <Route path="/TipoGastos" element={<Inicial />} />

      </Routes>
    </BrowserRouter>
  );
}
