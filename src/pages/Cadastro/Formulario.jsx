import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FormA from "./formulario1";
import FormB from "./formulario2";
import FormC from "./formulario3";




const Formulario = () =>{

   return(
         
      <Router>
         <Routes>
            <Route path='/form1' element={<FormA />}/>
            <Route path='/form2' element={<FormB />}/>
            <Route path='/form3' element={<FormC />}/>
         </Routes>    
      </Router>
)}

export default Formulario;