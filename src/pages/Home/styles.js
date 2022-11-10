import styled from 'styled-components';


export const Container = styled.section`
    max-width: 1920px;
    margin: 10px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 0px 10px 10px;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;


export const ButtonDanger = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px 8px;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #dc3545;
        color: #fff;
    }
`;

export const BotaoAcao = styled.section`
    margin: 25px 0px;
`;

export const AlertDanger = styled.p`
  background-color: #f8d7da;
  color: #842029;
  margin: 20px 0;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  padding: 7px;
`;

export const AlertSuccess = styled.p`
  background-color: #d1e7dd;
  color: #0f5132;
  margin: 20px 0;
  border: 1px solid #badbcc;
  border-radius: 4px;
  padding: 7px;
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 8px 12px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    :hover{
        background-color: #157347;
        color: #fff;
    }
`;

export const Titulo = styled.table`
  color: black;
  font-size: 25px;
  margin: 20px 0px;
`;

export const Table = styled.table`
  width: 100%;
  th{
      background-color: #7FFF00;
      color: black;
      padding: 10px;
      border-radius: 5px;
  }
  td{
    background-color: #F8F8FF;
    color: black;
    padding: 8px;
    border-radius: 5px;
  }
`;


export const ButtonAcoes = styled.button`
  display: flex;
  background-color: #fff;
  color: #198754;
  padding: 5px 4px;
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  :hover{
      background-color: #157347;
      color: #fff;
  }
`;