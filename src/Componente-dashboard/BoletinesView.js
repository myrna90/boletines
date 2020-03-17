import React from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';
import UsuarioCabecera from '../Componentes-menu/Usuario-cabecera';

function BoletinesView (){
    return(
        <div className="conteiner contenedor-dash">
            <MenuToggle/>
            <div id="cabecera" className="header">
                <h1 className="h1">Boletin</h1>
                <UsuarioCabecera/>
            </div>
        <div className="contenido contenido-bol section">
        <div className="boletin-select">
        <h3>BMC-00</h3>
        <p>Proyecto: Punto sur</p>
        <p>Cliente: </p>
        <p></p>
        <p></p>
        <p>PDF</p>
        </div>
        </div>
        </div>
        
    )
} 

export default BoletinesView;