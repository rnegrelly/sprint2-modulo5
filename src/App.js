
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/home';
import FormA from './pages/Cadastro/formulario1';
import FormB from './pages/Cadastro/formulario1';
import FormC from './pages/Cadastro/formulario1';
import Clientes from './pages/Listaclientes/Listaclientes';

import { Contextocliente } from './context/novocliente';



function App() {
  return (

    // <div className="App">
    //   <Header/>      
    //   <Home />                         
    // </div>

    <div className="App">
      <Router>      
        <Header/>      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cadastrar' element={<Contextocliente><FormA/></Contextocliente>} />
          <Route path='/form2' element={<Contextocliente><FormB/></Contextocliente>} />
          <Route path='/form3' element={<Contextocliente><FormC/></Contextocliente>} />     
          <Route path='/cliente' element={<Contextocliente><Clientes/></Contextocliente>} />        
        </Routes>                        
    </Router>

    </div>
    
  );
}

export default App;
