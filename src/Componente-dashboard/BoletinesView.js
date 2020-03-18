import React, { useState } from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';
import UsuarioCabecera from '../Componentes-menu/Usuario-cabecera';

function BoletinesView (){
   
    /*const [folio, setFolio] = useState(folio);
    const [proyecto, setProyecto] = useState(proyecto);
    const [cliente, setCliente] = useState(cliente);
    const [fecha, setFecha] = useState(fecha);
    const [displayName] = useState(displayName);
    const [departamento, setDepartamento] = useState(departamento);
    const [problema, setProblema] = useState(problema);
    const [solucion, setSolucion] = useState(solucion);*/

    return(
        <div className="conteiner contenedor-dash">
        <MenuToggle/>
        <div id="cabecera" className="header">
        <h1 className="h1">Boletin</h1>
        <UsuarioCabecera/>
        </div>
        <div className="view-bol">
        <div id="rectangle" className="titulo-view">
            <h3 className="h3-bol">BMC-00</h3>
        </div>
        <div className="input-view">
            <div className="div-input proyecto"><p>Proyecto:</p> <input className="input-bol"></input></div>
            <div className="div-input cliente"><p>Cliente:</p> <input className="input-bol"></input></div>
            <div className="div-input fecha"><p>Fecha:</p><input className="input-bol"></input></div>
            <div className="div-input sistema"><p>Sistema:</p><input className="input-bol"></input></div>
        </div>
        <div className="problema-view disgn">
            <div className="conteiner-problema">
            <h6 className="titulo-problem">Problema:</h6>
            <textarea className="input-problema"></textarea></div>
            <div className="conteiner-problema">
            <h6 className="titulo-problem">Imagen problema:</h6>
            <div className="input-problema"></div>
            </div>
        </div>
        <div className="solucion-view disgn">
        <div className="conteiner-problema">
            <h6 className="titulo-problem">Solución:</h6>
            <textarea className="input-problema"></textarea></div>
            <div className="conteiner-problema">
            <h6 className="titulo-problem">Imagen solución:</h6>
            <div className="input-problema"></div>
            </div>
        </div>
        </div>
        </div>
    )
} 

export default BoletinesView;