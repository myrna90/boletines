import React, { useState } from 'react';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';

function BoletinesView() {
    const [comment, setComment] = useState('');

    return (
        <div className="conteiner contenedor-view">
            <div id="cabecera" className="header">
                <h2 className="h2">Vista Boletin</h2>
                <UsuarioCabecera />
            </div>
            <div className="contenido-view section">
                <div className="view">
                    <div id="rectangle" className="titulo-view">
                        <h3 className="h3-bol">B-00</h3>
                    </div>
                    <div className="input-view">
                        <div className="div-input proyecto"><p>Proyecto:</p> <input className="input-bol input-proyecto" ></input></div>
                        <div className="div-input cliente"><p>Cliente:</p> <input className="input-bol input-cliente"></input></div>
                        <div className="div-input fecha"><p>Fecha:</p><input className="input-bol input-fecha"></input></div>
                        <div className="div-input sistema"><p>Sistema:</p><input className="input-bol input-sistema"></input></div>
                        <div className="div-input equipo"><p>Equipo:</p><input className="input-bol input-equipo"></input></div>
                        <div className="div-input marca"><p>Marca:</p><input className="input-bol input-marca"></input></div>
                        <div className="div-input modelo"><p>Modelo:</p><input className="input-bol input-modelo"></input></div>
                    </div>
                    <div className="problema-view disgn">
                        <div className="conteiner-problema">
                            <h6 className="titulo-problem">Problema:</h6>
                            <textarea className="input-problema"></textarea></div>
                        <div className="conteiner-problema">
                            <h6 className="titulo-problem">Imagen problema:</h6>
                            <div className="img-problema"><i className="img-export-bol" class="material-icons md-56">add_photo_alternate</i></div>
                        </div>
                    </div>
                    <div className="solucion-view disgn">
                        <div className="conteiner-problema">
                            <h6 className="titulo-problem">Solución:</h6>
                            <textarea className="input-problema"></textarea></div>
                        <div className="conteiner-problema">
                            <h6 className="titulo-problem">Imagen solución:</h6>
                            <div className="img-problema"><i className="img-export-bol" class="material-icons md-56">add_photo_alternate</i></div>
                        </div>
                    </div>
                </div>
                <div className="view-coment">
                    <div className="titulo-coment">
                        <h3 className="h3-bol">Comentarios</h3>
                    </div>
                    <div className="div-contador">
                        <p className="input-contador"><span class="material-icons md-5">mode_comment</span>10 </p>
                        
                    </div>
                    <div className="div-comentar" >
                        <input className="input-comentar" onChange={(event) => setComment(event.target.value)}></input>
                        <button className="btn btn-comentar">Comentar</button>
                    </div>
                    <div className="div-comentarios">
                        <div className="div-comentario"><span class="material-icons md-24">account_circle</span><p className="p.comentario">{comment}</p></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BoletinesView;