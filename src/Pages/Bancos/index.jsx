import { Button, Table } from "antd";
import Header from "../../common/Header";
import { Tabela } from "./styled";
import { useState } from "react";
import { api } from "../../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Bancos() {
  const [bancos, setBancos] = useState([]);
  const navigate = useNavigate();

  const buscarBancos = () => {
    api
      .get("/bancos")
      .then((response) => {
        setBancos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    buscarBancos();
  }, []);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Tipo de Conta",
      dataIndex: "tipoConta",
      key: "tipoConta",
    },
    {
      title: "Cadastrar",
      dataIndex: "acoes",
      key: "acoes",
      render: () => {
        return (
          <>
            <Button
                onClick={() => {
                    navigate("/Bancos/criar");
                }}
            >Cadastrar</Button>
          </>
        );
      },
    },
    {
      title: "Editar",
      dataIndex: "acoes",
      key: "acoes",
      render: () => {
        return (
          <>
            <Button>Editar</Button>
          </>
        );
      },
    },
    {
      title: "Deletar",
      dataIndex: "acoes",
      key: "acoes",
      render: () => {
        return (
          <>
            <Button>Deletar</Button>
          </>
        );
      },
    },
  ];

  const data = bancos.map((banco) => {
    return {
      key: banco.id,
      nome: banco.name,
      tipoConta: banco.tipoConta,
    };
  });

  return (
    <>
      <Header />
      <Tabela>
        <Table columns={columns} dataSource={data} />
      </Tabela>
    </>
  );
}
