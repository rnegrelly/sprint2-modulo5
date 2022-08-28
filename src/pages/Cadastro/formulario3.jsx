import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../components/button/button"
import { Contextocliente } from "../../context/novocliente"
import './formulario.css'

const FormC = () =>{

    const {nome, sobrenome, email, telefone, cep, ruaum, ruadois} = useState(Contextocliente)
    const {enviar} = useContext(Contextocliente)

    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [renda, setRenda] = useState("");

    const enviaCadastro = () => {
        enviar({nome, sobrenome, email, telefone, cep, ruaum, ruadois, dataNascimento, cpf, renda})
    }

    return(

        <div className="fomrulario-tres">
            <form>
                <label>Data Nascimento:<br></br><input type='text' value={dataNascimento} onChange={(e)=>setDataNascimento(e.target.value)}></input></label><br></br><br></br>
                <label>CPF:<br></br><input type='text' value={cpf} onChange={(e)=>setCpf(e.target.value)}></input></label><br></br><br></br>
                <label>Renda:<br></br><input type='text' value={renda} onChange={(e)=>setRenda(e.target.value)}></input></label><br></br><br></br>
                
                <Link to='/cliente'>
                    <Button textobotao='Salvar' onClick={enviaCadastro}/>
                </Link>
                
            </form>            
        </div>

    )

}

export default FormC