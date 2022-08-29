import React from "react"
import { Link } from "react-router-dom"
import Header from "../../components/header/header"

const Clientes = () =>{

    return(
        <div className="dados-cliente">
           
           <h5>Cliente Cadastrado:</h5>

           <div>
                <p>Nome: </p>
                <p>Sobrenome: </p>
                <p>E-mail: </p>
                <p>Telefone: </p><br></br>
                <p>CEP: </p>
                <p>Endereço 1: </p>
                <p>Endereço 2: </p><br></br>
                <p>Data de Nascimento: </p>
                <p>CPF: </p>
                <p>Renda: </p>
                
                
           </div>

        </div>
    )

}

export default Clientes