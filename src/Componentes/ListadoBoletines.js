import React from 'react';
import MenuToggle from '../Componentes/Componentes-secundarios/MenuToggle';
import UsuarioCabecera from '../Componentes/Componentes-secundarios/Usuario-cabecera';

function Listado () {
    return(
        <div className="conteiner contenedor-dash">
            <MenuToggle/>
            <div id="cabecera" className="header">
            <h2 className="h2">Listado</h2>
            <UsuarioCabecera />
            </div>
            <div className="contenido contenido-list section">
            <div className="content-list">
            <div className="div-filtro">
            <span class="material-icons md-28">filter_list</span>
            <h6 className="h6-filtro">Filtro</h6>
            </div>
            <div className="div-tabla">
                <table className="tabla">
                    <tr className="tr-th">
                        <th><strong>Folio</strong></th>
                        <th><strong>Proyecto</strong></th>
                        <th><strong>Problema</strong></th>
                        <th><strong>Cliente</strong></th>
                        <th><strong>Vista</strong></th>
                    </tr>
                    <tr className="tr-td-white">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-grey">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-white">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-grey">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-white">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-grey">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-white">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-grey">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-white">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-grey">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-white">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="tr-td-grey">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className="div-paginacion"></div>
            </div>
            </div>
        </div>
    )
}

export default Listado;