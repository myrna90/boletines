import React, { Component } from 'react';
import MenuToggle from '../Componentes-menu/MenuToggle';
import UsuarioCabecera from '../Componentes-menu/Usuario-cabecera';

/*Componente Dashboard dentro se manda a llamar a los componentes MenuToglle y Cabecera, 
se separaron los contenedores grid, para poder dar una mejor funcionalidad al codigó */
class Dashboard extends Component {
    render(){
        return(
            <div className="conteiner contenedor-dash">
                <MenuToggle/>
                <div id="cabecera" className="header">
                    <i class="material-icons md-40">dashboard</i>
                    <h1 className="h1">Dashboard</h1>
                    <UsuarioCabecera/>
                </div>
                <div id="contenido" className="contenido contenido-dash section">
                    <div className="grid-contentDash">
                    
                    <div className="grid-publicados grids-dash">
                    <h4 className="h4">Boletines</h4>
                    <div className="digsn-dash"><div className="circulo-boletin"></div><p className="p-boletines">TNB-00 | Casa cuervo-La rioja</p><div className="contenedor-icon"><i class="material-icons  md-18">open_in_new</i></div></div>
                    <div className="digsn-dash"><div className="circulo-boletin2"></div><p className="p-boletines">TNB-01 | Punto sur- CCTV</p><div className="contenedor-icon"><i class="material-icons md-18">open_in_new</i></div></div>
                    <div className="digsn-dash"><div className="circulo-boletin"></div><p className="p-boletines">TNB-02 | Andares-Plaza comercial </p><div className="contenedor-icon"><i class="material-icons md-18">open_in_new</i></div></div>
                    <div className="digsn-dash"><div className="circulo-boletin2"></div><p className="p-boletines">TNB-03 | Hines-Control de accesos</p><div className="contenedor-icon"><i class="material-icons md-18">open_in_new</i></div></div>
                    
                    
                    </div>
                    <div className="grid-proyectos grids-dash">
                    <h4 className="h4">Mis proyectos</h4>
                    <div className="digsn-dash2"><p className="p-boletines">Casa cuervo-La rioja</p></div>
                    <div className="digsn-dash2"><p className="p-boletines">Punto sur- CVTV</p></div>
                    <div className="digsn-dash2"><p className="p-boletines">Andares-Plaza comercial </p></div>
                    <div className="digsn-dash2"><p className="p-boletines">Hines-Control de accesos</p></div>                   
                    </div>
                    </div>

                    <div className="boletines-general">
                    <div className="conteiner-encabezado">
                    <h4 className="h4">Boletines</h4>
                    </div>
                    <div className="conteiner-paginacion">
                    <div className="paginacion">
                    <div className="pag">1</div>
                    <div className="pag">2</div>
                    <div className="pag">3</div>
                        </div>
                    
                    </div>
                    
                    <div className="conteiner-bol-gen">
                    <div className="bol-gen"><p className="p-bol-gen"><strong>BMC-00</strong><br/>Proyecto: Casa cuervo<br/>Problema: CCTV</p></div>
                    <div className="bol-gen"><p className="p-bol-gen"><strong>BMC-02</strong><br/>Proyecto: Punto sur<br/>Problema: Control de accesos</p></div>
                    <div className="bol-gen"><p className="p-bol-gen"><strong>BMC-03</strong><br/>Proyecto: Hines<br/>Problema: CCTV</p></div>
                    <div className="bol-gen"><p className="p-bol-gen"><strong>BMC-04</strong><br/>Proyecto: Casa cuervo<br/>Problema: CCTV</p></div>
                    <div className="bol-gen"><p className="p-bol-gen"><strong>BMC-05</strong><br/>Proyecto: Punto sur<br/>Problema: Control de accesos</p></div>
                    <div className="bol-gen"><p className="p-bol-gen"><strong>BMC-06</strong><br/>Proyecto: Hines<br/>Problema: CCTV</p></div> 
                    </div>             
                    </div>
                    </div>
                </div>
            
            
        )
    }
}

export default Dashboard;