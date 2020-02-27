import React, { Component } from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';
import BotonMenu from '../Componentes-menu/BotonMenu';
import FormBoletines from '../Componentes-secundarios/FormBoletines';

class Boletines extends Component{
    constructor(props){
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
            /*contenedor general */
        <div className="contenedor">
            {/* contenedor menu*/}
            <MenuToggle visible={this.state.visible}/>

            {/*Contenedor general header */}
            <div className="cabecera">
            <BotonMenu toggleMenu={this.toggleMenu}/>
                <div className="titulo-cabecera">
                <h3 className="h3-boletin">Crear boletín</h3>
                </div>
            </div>
            <FormBoletines/>
        </div>
            
        )
    }
}
export default Boletines;