import React, { Component } from 'react';
import BotonMenu from '../Componentes-menu/BotonMenu';



/*Componende cabecera que contiene el header del componente dashboard */
class CabeceraDashboard extends Component {

    render(){
        return(
            <div id="cabecera" className="cabecera">
                {/*<BotonMenu/>*/}
              <i class="material-icons md-48">dashboard</i>
              <h1 className="h1">Dashboard</h1>
              </div>
        )
    }
}

export default CabeceraDashboard;