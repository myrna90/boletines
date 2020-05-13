import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BarraFiltro from './BarraFiltro';
import boletines from '../boletines.json';
import Paginacion from './Paginacion';


class Tabla extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            currentPage: 1,
            todosPerPage: 12,
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
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    render() {

    const { boletines, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = boletines.slice(indexOfFirstTodo, indexOfLastTodo);


      const data = boletines.filter((boletines) => {
        if (this.state.search == null)
            return boletines
        else if (boletines.proyecto.toLowerCase().includes(this.state.search.toLowerCase())
            || boletines.sistema.toLowerCase().includes(this.state.search.toLowerCase())
            || boletines.cliente.toLowerCase().includes(this.state.search.toLowerCase())) {
            return boletines
        }
    });
      const renderTodos = currentTodos.map((boletines, id) => {
        return (

            <tr className="tr-general" key={id}>
                
                <td >{boletines.folio}</td>
                <td >{boletines.proyecto}</td>
                <td >{boletines.sistema}</td>
            </tr>
        )
    });

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(boletines.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
       /* const data = boletines.boletines.filter((boletines) => {
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
        });*/
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
                <div className="div-paginacion">
               
               
              
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
            </div>
        )
    }
}

export default Tabla;