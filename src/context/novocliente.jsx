import { useState } from "react";
import { createContext } from "react";

export const Contextocliente = createContext();

export const NovoCliente = ({children}) => {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
  
    const [cep, setCep] = useState('');
    const [ruaum, setRuaum] = useState('');
    const [ruadois, setRuadois] = useState('');
    
  
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [renda, setRenda] = useState("");
  
    const enviaCadastro = ({ nome, sobrenome, email, telefone, 
      cep, ruaum, ruadois, dataNascimento, cpf, renda}) => {
          
      setNome(nome);
      setSobrenome(sobrenome);
      setEmail(email);
      setTelefone(telefone);
  
      setCep(cep);
      setRuaum(ruaum);
      setRuadois(ruadois);
      
  
      setDataNascimento(dataNascimento);
      setCpf(cpf);
      setRenda(renda);
      
    };

    return (
      <Contextocliente.Provider value={{ nome, sobrenome, email, telefone, cep, ruaum, ruadois, dataNascimento, cpf, renda, enviar: enviaCadastro }}>
        {children}
      </Contextocliente.Provider>
    );
}