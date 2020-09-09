import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Componentes/Dashboard";
import Boletines from "../Componentes/Componentes-boletines/Boletines";
import MiPerfil from "../Componentes/MiPerfil";
import BoletinesView from "../Componentes/Componentes-secundarios/BoletinesView";
import Listado from "../Componentes/Componentes-Listado/ListadoBoletines";
import Admin from "./Componentes-Admin/Admin";
//import PrivateRoute from "../Componentes/Componentes-login/PrivateRoute";

const Navegacion = () => (
  <Switch>
    {/**/}
    <Route
      exact
      path="/Vista/Dashboard"
      component={Dashboard}
     
    />
    <Route
      path="/Vista/Boletines"
      component={Boletines}
      
    />
    <Route path="/Vista/Listado" component={Listado}  />
    <Route
      path="/Vista/View"
      component={BoletinesView}
      
    />
    <Route
      path="/Vista/MiPerfil"
      component={MiPerfil}
      
    />
    <Route path="/Vista/Admin" 
    component={Admin}  
    />
    {/*<Route component={PageNotFound}/>*/}
  </Switch>
);

export default Navegacion;
