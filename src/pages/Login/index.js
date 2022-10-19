import React, {  } from 'react'; 
import './Login.css';
import  imgRadiusnet from '../images/image-radiusnet.png';
import  logoRadiusnet from '../images/logo-radiusnet.png';


export function Login() {
  //Utilizando estado
  //const [getUsuario, setUsuario] = useState(''); //Declarando useState para manipular o usuario
  //const [getSenha, setSenha] = useState([]); //Declarando useState para manipular a senha
  const batata = false;
  // Criando function para disparo de login+senha setUsuario/setSenha
  function verificaUsuario() {
   // const dadosUsuario = {
     // usuario: getUsuario,
    //  senha: getSenha
   // };
    //console.log(dadosUsuario); 
  }
  if(batata = true) {
    return (
      <div>
        <h1>Erro</h1>
      </div>
    )
  } else {
    return ( 
      <div className='Container'>
        <div className='Left-Div'>
          <img src={imgRadiusnet} alt="sagsa"/>
          <h1>O melhor para o seu provedor</h1>
          <span>Gerencie o seu sistema a qualquer momento e de qualquer lugar</span>
        </div>
        <div className='Right-Div'>
          <div className='Select-Idioma'>
            <select defaultValue={'PT-BR'}>
              <option value="PT-BR">PT-BR</option>
              <option value="ES">ES</option>
              <option value="EN">EN</option>
            </select>
          </div>
          <img src={logoRadiusnet} alt="safasg"/>
          <div className='Form-Usuario'>
            <label>
              Usuário
              <input
                type="text"
                placeholder="Digite um usuário..."
                //onChange={e => setUsuario(e.target.value)}
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                placeholder="Digite uma senha..."
                //onChange={e => setSenha(e.target.value)}
              />
            </label>
            <button type="button"  onClick={verificaUsuario}>
              Entrar
            </button>
          </div>
        </div> 
      </div>
    );
  }
}