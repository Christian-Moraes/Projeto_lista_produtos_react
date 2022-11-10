import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Container, ConteudoTitulo, BotaoAcao, ButtonInfo, Titulo, ConteudoProd } from './styles';

export const Visualizar = () => {

  const [data, setData] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const getProduto = async () =>{
      await fetch("http://localhost/API_react/Visualizar.php?id=" + id)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        setData(responseJson.produto)
      });
    }
    getProduto();
  },[id])
 return (
        <Container>
            <ConteudoTitulo>
              <Titulo>Detalhes do Produto</Titulo>
                <BotaoAcao>
                    <Link to="/">
                        <ButtonInfo>Listar</ButtonInfo>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>
            <ConteudoProd>Código: {data.id}</ConteudoProd>
            <ConteudoProd>Título: {data.titulo}</ConteudoProd>
            <ConteudoProd>Descrição: {data.descricao}</ConteudoProd>
        </Container>

    );
}
