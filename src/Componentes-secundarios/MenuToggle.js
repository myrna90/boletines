import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LogoW from '../imgs/logotnW.png';

class MenuToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.aside = React.createRef();
        this.changeWidth = this.changeWidth.bind(this);
    }

    changeWidth() {
        const f = '3.44em';
        const t = '12.5em';
        if (this.aside.current.style.width !== f) {
            this.aside.current.style.width = f;
        } else {
            this.aside.current.style.width = t;
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
                        <img src={LogoW} className="logoW"/>
                        <Link to="/Dashboard" className="Link L-dashboard"><i class="material-icons md-24">dashboard</i><div className="text-menu">Dashboard</div></Link>
                        <Link to="/Boletines" className="Link L-boletines"><i class="material-icons md-24">line_weight</i><div className="text-menu">Boletines</div></Link>
                        <Link to="/MiPerfil" className="Link L-miperfil"><i class="material-icons md-24">person</i><div className="text-menu">Mi Perfil</div></Link>
                        <Link to="/Soporte" className="Link L-soporte"><i class="material-icons md-24">help_outline</i><div className="text-menu">Soporte</div></Link>
                    </div>
                </div>
                <div className="conteiner-btnOut">
                    {this.renderRedirect()}
                    <button to="/" type="submit" onClick={this.setRedirect} className="Link link-out"><i class="material-icons md-24">exit_to_app</i><div className="text-menu">Salir</div></button>
                </div>
            </div>

        )
    }
}

export default MenuToggle;