
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/home';
import FormA from './pages/Cadastro/formulario1';
import FormB from './pages/Cadastro/formulario1';
import FormC from './pages/Cadastro/formulario1';
import Clientes from './pages/Listaclientes/Listaclientes';
import Footer from './components/footer/footer';

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
            <Route path='/cadastrar' element={<FormA/>}/>
            <Route path='/form2' element={<FormB/>} />
            <Route path='/form3' element={<FormC/>} />     
            <Route path='/cliente' element={<Clientes/>} />        
          </Routes>
          <Footer/>
        </Router>

      </div>        
    

    
  );
}

export default App;
