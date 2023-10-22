import { useState } from "react";
import ComponentButton from "../../common/Button";
import Input from "../../common/Input";
import { Conteiner, LoginBox, LoginImg } from "./styled";
import { api } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();


  const handleLogin = () => {
    const data = {
      email: email,
      password: senha,
    };

    api
      .post("/usuarios/login", data)
      .then((response) => {
         toast.success(response.data.message);
         navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <Conteiner>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <LoginBox>
        <h1>Login</h1>

        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        <ComponentButton
          text="Entrar"
          onClick={() => {
            handleLogin();
          }}
        />
      </LoginBox>

      <LoginImg>
        <img
          src="https://static.vecteezy.com/ti/vetor-gratis/p3/1925654-grafico-grafico-de-mercado-de-acoes-investimento-em-fundo-azul-vetor.jpg"
          alt="Logo"
        />
      </LoginImg>
    </Conteiner>
  );
}
