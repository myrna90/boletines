import React, { useState, useEffect, Component } from "react";
import boletines from "../boletines.json";
import TablePagination from '@material-ui/core/TablePagination';
import Pagination from "react-js-pagination";

class Paginacion extends Component {
  constructor() {
    super();
    this.state = {
      todos: boletines.boletines,
      currentPage: 1,
      todosPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todos) => {
      return <li>{todos}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(id => {
      return (
        <li
          id={id}
          onClick={this.handleClick}
        >
          {id}
        </li>
      );
    });

    return (
      <div>
        <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default Paginacion;
