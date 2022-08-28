import React, {useContext, useState} from "react"
import Button from "../../components/button/button"
import { Link } from "react-router-dom"
import { Contextocliente } from "../../context/novocliente"

import './formulario.css'


const FormB = () =>{

    const {nome, sobrenome, email, telefone} = useState(Contextocliente)
    const {enviar} = useContext(Contextocliente)

    const [cep, setCep] = useState("");
    const [ruaum, setRuaum] = useState("");
    const [ruadois, setRuadois] = useState("");

    const enviaCadastro = ()=>{

        enviar({nome, sobrenome, email, telefone, cep, ruaum, ruadois})

    }
    

    return(

        <div className="fomrulario-dois">
            <form>
                <label>CEP:<br></br><input type='text' value={cep} onChange={(e)=>{setCep(e.target.value)}}></input></label><br></br><br></br>
                <label>Endereço 1:<br></br><input type='text' value={ruaum} onChange={(e)=>{setRuaum(e.target.value)}}></input></label><br></br><br></br>
                <label>Endereço 2:<br></br><input type='text' value={ruadois} onChange={(e)=>{setRuadois(e.target.value)}}></input></label><br></br><br></br>
            </form>

            <Link to='/form3'>
                <Button textobotao='Próximo' onClick={enviaCadastro}/>
            </Link>
            
        </div>

    )

}

export default FormB