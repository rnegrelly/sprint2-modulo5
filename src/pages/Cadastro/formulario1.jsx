import React, {useContext, useState} from "react"
import Button from "../../components/button/button"
import { Link } from "react-router-dom"
import { Contextocliente } from "../../context/novocliente"

import './formulario.css'

const FormA = () =>{

    const enviar = useContext (Contextocliente)

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const enviaCadastro = () => {

        enviar({nome, sobrenome, email, telefone})
    }

    return(
        
        <div>
            <main>
                <div className="formulario-um">
                    <form>
                        <label>Nome:<br></br><input type='text' value={nome} onChange={(e)=>{setNome(e.target.value)}}></input></label><br></br>
                        <label>Sobrenome:<br></br><input type='text' value={sobrenome} onChange={(e)=>{setSobrenome(e.target.value)}}></input></label><br></br>
                        <label>E-mail:<br></br><input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input></label><br></br>
                        <label>Telefone:<br></br><input type='text' value={telefone} onChange={(e)=>{setTelefone(e.target.value)}}></input></label><br></br><br></br>

                        <Link to='/form2'>
                            <Button textobotao='Próximo' onClick={enviaCadastro}/>
                        </Link>
                    </form>                    
                </div>
            </main>
        </div>
        
    )

}

export default FormA