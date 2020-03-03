import React, { Component } from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
class Dashboard extends Component {
    render(){
        return(
            <div className="conteiner contenedor-dash">
                <MenuToggle/>
                <div id="cabecera" className="header">
                <i class="material-icons md-48">dashboard</i>
                <h1 className="h1">Dashboard</h1>
                </div>
                <div id="contenido" className="contenido contenido-dash section">
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