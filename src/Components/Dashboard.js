import React, { Component } from 'react';
import MenuToggle from './MenuToggle';
import CabeceraDashboard from './CabeceraDashboard';

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
class Dashboard extends Component {
    render(){
        return(
            <div className="contenedor contenedor-dash">
              <MenuToggle/>
              <CabeceraDashboard/>
              <div id="contenido" className="contenido-dash">
              <div className="grid-contentDash">
              <div className="grid-publicados">
              <h4 className="h4">Boletines</h4>
              </div>
              <div className="grid-proyectos">
              <h4 className="h4">Mis proyectos</h4>
              </div>
              </div>
              </div>
            </div>
            
        )
    }
}

export default Dashboard;