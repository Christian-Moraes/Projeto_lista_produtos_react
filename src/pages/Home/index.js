import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Container, ConteudoTitulo, BotaoAcao, ButtonSuccess, Table, Titulo} from './styles';

export const Home = () => {

  const [data, setData] = useState([]);


  const getProdutos = async () =>{
    fetch("http://localhost/API_react/index.php")
    .then((response)=> response.json())
    .then((responseJson)=>(
      setData(responseJson.records)
    ));
  }
  
  useEffect(()=>{
    getProdutos();
  }, [])

  return (
    <Container>
        <ConteudoTitulo>
        <Titulo>Lista de produtos</Titulo>
        <BotaoAcao>
          <Link to="/cadastrar">
            <ButtonSuccess>Cadastrar</ButtonSuccess>
          </Link>
        </BotaoAcao>
      </ConteudoTitulo>
      
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
                <Link to={"/visualizar/" + produto.id}>Visualizar</Link>Editar Apagar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

//export default App;
