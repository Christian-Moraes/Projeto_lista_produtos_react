import React, {useState, useEffect } from 'react';

import {Table, Titulo} from './styles';

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
    <div>
      <Titulo>Lista de Produtos</Titulo>
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
              <td>Vizualizar Editar Apagar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

//export default App;
