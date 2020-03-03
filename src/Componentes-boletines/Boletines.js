import React, { Component } from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';
import FormBoletines from '../Componentes-boletines/FormBoletines';

class Boletines extends Component{
    render(){
        return(
            /*contenedor general */
        <div className="conteiner">
            {/* contenedor menu*/}
            <MenuToggle/>
            {/*Contenedor general header */}
            <div className="header">
                <i class="material-icons md-48">line_weight</i>
                <h1 className="h1">Crear boletín</h1>
            </div>
            <FormBoletines/>
        </div>
            
        )
    }
}
export default Boletines;