import { Form } from "antd";
import { Button } from "../../../common/Button/styled";
import Header from "../../../common/Header";
import Input from "../../../common/Input";
import { Conteiner, Titulo } from "./styled";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Criar() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const validateMessages = {
    required: "${label}  é obrigatório!",
  };

  const initialValues = {
    nome: "",
    tipoConta: "",
  };

  const onFinish = (values) => {
    const data = {
      name: values.nome,
      tipoConta: values.tipoConta,
    };

    api
      .post("/bancos/create", data)
      .then(() => {
        toast.success("Banco cadastrado com sucesso!", {
          autoClose: 3000,
        }
        );
        navigate("/Bancos");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form
      validateMessages={validateMessages}
      initialValues={initialValues}
      form={form}
      onFinish={onFinish}
      style={{ width: "100%" }}
    >
      <Header />

      <Conteiner>
        <Titulo>Cadastrar Banco</Titulo>
        <Form.Item
          name="nome"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input type="text" placeholder="Nome  do banco" />
        </Form.Item>
        <Form.Item
          name="tipoConta"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Input type="text" placeholder="Tipo de conta" />
        </Form.Item>
        <Button type="submit" > Cadastrar </Button>
      </Conteiner>
    </Form>
  );
}
