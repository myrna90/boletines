import React, { useState } from "react";
import AuthService from "../../Componentes-login/service/auth.service";

const ListadoProyectos = (props) => {
    
    return (
        <div>
            <div className="listado-admin">
                <div className='contenedor-titulo-listado contenedor-titulo-admin'>
                <span class="material-icons md-13">
work_outline
</span>
                    <h5>Listado proyectos</h5>
                </div>
            <table className="tabla-proyecto">
          <thead key="thead-admin">
            <tr className="tr-th">
              <th>
                <strong>Name</strong>
              </th>
              <th>
                <strong>Fecha inicio</strong>
              </th>
              <th>
                <strong>Cliente</strong>
              </th>
              <th>
                <strong>Editar</strong>
              </th>
              <th>
                <strong>Eliminar</strong>
              </th>
            </tr>
          </thead>
          <tbody className="tbody-listado">
         
            <tr key='index' className="tr-general">
            <td></td>
            
            <td></td>
            <td></td>
            <td>
              
            </td>
            <td>
             
            </td>
          </tr> 
          </tbody>
        </table>
            </div>
        </div>
    )
}

export default ListadoProyectos;