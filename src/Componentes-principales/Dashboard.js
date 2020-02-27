import React, { Component } from 'react';
import CabeceraDashboard from '../Componentes-secundarios/CabeceraDashboard';
import BotonMenu from '../Componentes-menu/BotonMenu';
import MenuToggle from '../Componentes-menu/MenuToggle';

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            visible: true  
        };
    
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }
    render(){
        return(
            <div className="contenedor contenedor-dash">
                <MenuToggle visible={this.state.visible}/>
                <CabeceraDashboard/>
                <div id="contenido" className="contenido-dash">
                    <div className="grid-contentDash">
                    <div className="contenedor-boton">
                    <BotonMenu toggleMenu={this.toggleMenu}/>
                    </div>
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