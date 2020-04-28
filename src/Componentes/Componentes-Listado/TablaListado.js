import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BarraFiltro from './BarraFiltro';
import boletines from '../boletines.json';


class Tabla extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            boletines: [],
            search: null
        }
    }

    data() {
        fetch('http://localhost:3000/boletines', {
            method: 'GET',
            headers: {
                //Authorization: '',
                'Content-type': 'application/json; '
            }
        }
        )
            .then((response) => {
                return response.json()
            })
            .then((boletines) => {
                this.setState({ boletines: boletines })
            })
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Vista/View' />
        }
    }
    render() {
        const data = boletines.boletines.filter((boletines) => {
            if (this.state.search == null)
                return boletines
            else if (boletines.proyecto.toLowerCase().includes(this.state.search.toLowerCase())
                || boletines.sistema.toLowerCase().includes(this.state.search.toLowerCase())
                || boletines.cliente.toLowerCase().includes(this.state.search.toLowerCase())) {
                return boletines
            }
        }).map(boletines => {
            return (

                <tr className="tr-general">
                    <td >{boletines.folio}</td>
                    <td >{boletines.proyecto}</td>
                    <td >{boletines.sistema}</td>
                </tr>
            )
        });
        return (
            <div className="content-list">
                <div className="div-filtro">
                    <span class="material-icons md-28">filter_list</span>
                    <input className="input-filter" type="text"
                        placeholder="Filtro"
                        onChange={(e) => this.searchSpace(e)} />
                </div>

                <div className="div-tabla">
                    <table className="tabla">
                        <thead>
                            <tr className="tr-th">
                                <th><strong>Folio</strong></th>
                                <th><strong>Proyecto</strong></th>
                                <th><strong>Sistema</strong></th>
                                {/*<th><strong>Vista</strong></th>*/}
                            </tr>
                        </thead>

                        <tbody>
                            {data}
                            {/*<td>{this.renderRedirect()}<button className="btn-list" onClick={this.setRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>*/}

                        </tbody>
                    </table>
                </div>
                <div className="div-paginacion"></div>
            </div>
        )
    }
}

export default Tabla;