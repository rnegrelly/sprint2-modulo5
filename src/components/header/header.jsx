import Button from "../button/button";
import {Link} from 'react-router-dom';

import './header.css'

const Header = () =>{

    return (

        <header className="header-app">

            <div>
                <h1>Pagina de Clientes</h1>
            </div>

            <Link to='/'><p>Home</p></Link>
            <Link to='/cadastrar'><p>Cadastrar+</p></Link>
            <Link to='/cliente'><p>Clientes</p></Link>
           
        </header>        

    )

}

export default Header;