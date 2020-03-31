import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BarraFiltro from './BarraFiltro';

class Tabla extends Component {
    constructor(props) {
        super(props)
        this.state = {
        redirect: false
        }
        }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/View' />
        }
    }
    render() {
        return(
            <div className="content-list">
                    <BarraFiltro/>
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
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-grey">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-white">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-grey">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-white">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-grey">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-white">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-grey">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-white">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-grey">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-white">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                            <tr className="tr-td-grey">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
                            </tr>
                        </table>
                    </div>
                    <div className="div-paginacion"></div>
                    </div>
        )
    }
}

export default Tabla;