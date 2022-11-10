import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Container, ConteudoTitulo, BotaoAcao, ButtonSuccess, Table, Titulo, ButtonAcoes, ButtonDanger, AlertDanger, AlertSuccess} from './styles';

import { BsFillPlusSquareFill } from "react-icons/bs";
import { MdDeleteForever, MdAutoFixNormal, MdRemoveRedEye } from "react-icons/md";

export const Home = () => {

  const [data, setData] = useState([]);

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });


  const getProdutos = async () =>{
    fetch("http://localhost/API_react/index.php")
    .then((response)=> response.json())
    .then((responseJson)=>(
      setData(responseJson.records)
    ));
  }

  const apagarProduto = async (idProduto) => {
    await fetch("http://localhost/API_react/apagar.php?id=" + idProduto)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: responseJson.mensagem
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.mensagem
          });
          getProdutos();
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: "Erro: Produto não apagado com sucesso, tente mais tarde"
        });
      });
  };
  
  useEffect(()=>{
    getProdutos();
  }, [])

  return (
    <Container>
        <ConteudoTitulo>
        <Titulo>Lista de produtos</Titulo>
        <BotaoAcao>
          <Link to="/cadastrar">
            <ButtonSuccess> <BsFillPlusSquareFill/> Cadastrar </ButtonSuccess>
          </Link>
        </BotaoAcao>
      </ConteudoTitulo>

      {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
      {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
      
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(produto =>(
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>
                <Link to={"/visualizar/" + produto.id}>
                  <ButtonAcoes><MdRemoveRedEye/>Visualizar</ButtonAcoes>
                </Link>
                <Link to={"/Editar/" + produto.id}>
                  <ButtonAcoes><MdAutoFixNormal/>Editar</ButtonAcoes>
                </Link>
                <ButtonDanger onClick={() => apagarProduto(produto.id)}><MdDeleteForever/>Apagar</ButtonDanger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

//export default App;
