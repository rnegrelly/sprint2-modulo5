import Button from "../button/button";
import {Link} from 'react-router-dom';

import './header.css'

const Header = () =>{

    return (

        <header className="header-app">

            <div className="titulo-header">
                <h1>Pagina de Clientes</h1>
            </div>

            <div className="painel-nav">
                <Link to='/'><p>Home</p></Link>
                <Link to='/cadastrar'><p>Cadastrar+</p></Link>
                <Link to='/cliente'><p>Clientes</p></Link>
            </div>

            
           
        </header>        

    )

}

export default Header;