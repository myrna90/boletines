import React, { Component } from 'react';
import Navegacion from '../Componentes/Navegacion';
import { Link, Redirect } from 'react-router-dom';
import LogoW from '../Componentes/imgs/logotnW.png';

class Vista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.aside = React.createRef();
        this.changeWidth = this.changeWidth.bind(this);
    }

    changeWidth() {
        if (this.aside.current.style.width !== '3.44em') {
            this.aside.current.style.width = '3.44em';
        } else {
            this.aside.current.style.width = '12.5em';
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
        localStorage.clear('user')
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <div className="conteiner">
                <div className="aside" ref={this.aside}>
                    <div className="menu-toggle">
                        <div className="contenedor-titulo">
                            <div class="hamburger" id="btn" onClick={this.changeWidth}>
                                <div class="_layer -top"></div>
                                <div class="_layer -mid"></div>
                                <div class="_layer -bottom"></div>
                            </div>
                        </div>

                        <div className="nav-menu">
                            <img src={LogoW} className="logoW" />
                            <Link to="/Vista/Dashboard" className="Link L-dashboard"><i class="material-icons md-24">dashboard</i><div className="text-menu">Dashboard</div></Link>
                            <Link to="/Vista/Boletines" className="Link L-boletines"><span class="material-icons md-24">add_circle</span><div className="text-menu">Crear Boletin</div></Link>
                            <Link to="/Vista/Listado" className="Link L-listado"><span class="material-icons md-24">view_list</span><div className="text-menu">Listado boletines</div></Link>
                            <Link to="/Vista/MiPerfil" className="Link L-miperfil"><i class="material-icons md-24">person</i><div className="text-menu">Mi Perfil</div></Link>
                            <Link to="/Vista/Soporte" className="Link L-soporte"><i class="material-icons md-24">help_outline</i><div className="text-menu">Soporte</div></Link>

                        </div>
                    </div>
                    <div className="conteiner-btnOut">
                        {this.renderRedirect()}
                        <button to="/" type="submit" onClick={this.setRedirect} className="Link link-out"><i class="material-icons md-24">exit_to_app</i><div className="text-menu">Salir</div></button>
                    </div>
                </div>
                    <Navegacion />
            </div>
        )
    }
}
export default Vista;