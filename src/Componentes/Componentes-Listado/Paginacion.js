import React, { Component } from 'react';
import Axios from 'axios';
import boletines from '../boletines.json';

  /*const data = boletines.boletines.map((boletines) => {
    return (
      console.log(boletines.id)
    )
  });
class Paginacion extends Component {

  constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            todosPerPage: 12,
            boletines: [],
            loading: false
        }
        this.handleClick = this.handleClick.bind(this);
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
      const renderTodos = currentTodos.map((boletines, index) => {
        return (

            <tr className="tr-general" key={index}>
                {boletines}
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

        /*const data = boletines.boletines.map((boletines) => {
            return (
                <tr className="tr-general">
                <td >{boletines.folio}</td>
                <td >{boletines.proyecto}</td>
                <td >{boletines.sistema}</td>
            </tr>
            )
        })
        if (this.state.loading) {
            return (
                <p>loading...</p>
            )
        }
        return (
            <div>
                
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

/*const UserIdComponent = (props) => {
    return (
        <button className="the-btm"
            value={props.name}
            onClick={props.onClick}>
            {props.name}</button>
    )
}*/

export default Paginacion;