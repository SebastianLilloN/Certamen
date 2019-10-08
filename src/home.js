import React from "react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Pc from './pagina/onlyPc';
import Mobile from './pagina/onlyMobile';
import Header from './pagina/header';
import Columna from './pagina/columnas';
import Footer from './pagina/footer';



export default () => (
  <div>
    <Pc/>
    <Mobile/>
    <Header/>
    <Columna/>
    <Footer/>
  </div>
);

