import {  useNavigate } from "react-router-dom";
import { ButtonMenu, HeaderWrapper, Logo, Menu, MenuSair } from "./styled";
import { Avatar } from "antd";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Logo>
        <img src={null} alt="logo" />
      </Logo>

      <Menu>
        <ButtonMenu onClick={
          () => {
            navigate("/home");
          }
        }>Inicio</ButtonMenu>
        <ButtonMenu
          onClick={() => {
            navigate("/Ganhos");
          }}
        >
          Ganhos
        </ButtonMenu>
        <ButtonMenu
          onClick={() => {
            navigate("/Gastos");
          }}
        >
          Gastos
        </ButtonMenu>
        <ButtonMenu
          onClick={() => {
            navigate("/Bancos");
          }}
        >
          Bancos
        </ButtonMenu>
        <ButtonMenu
          onClick={() => {
            navigate("/TipoGastos");
          }}
        >
          Tipo Gastos
        </ButtonMenu>
      </Menu>
      <MenuSair>
        <Avatar size="large">U</Avatar>
        <ButtonMenu onClick={handleLogout}>Sair</ButtonMenu>
      </MenuSair>
    </HeaderWrapper>
  );
}
