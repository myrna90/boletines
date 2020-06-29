import React, { useState, useEffect, useReducer } from "react";
import boletines from "../boletines.json";
import { Redirect } from "react-router-dom";

const Paginacion = () => {
  const initialState = {
    boletines: boletines.boletines,
    currentPage: 1,
    boletinesPerPage: 10,
    indexOfLastBoletines: undefined,
    indexOfFirstBoletines: undefined,
    currentBoletines: undefined,
    pageNumber: [],
  };

  const boletinesReducer = (state, action) => {
    switch (action.type) {
      case "SEX_LAST_INDEX":
        return {
          ...state,
          indexOfLastBoletines: action.lastIndex,
        };
      case "SET_FIRST_INDEX":
        return {
          ...state,
          indexOfFirstBoletines: action.firstIndex,
        };
      case "SET_CURRENT_BOLETINES":
        return {
          ...state,
          currentBoletines: action.currentBoletines,
        };
      case "SET_PAGE_NUMBERS":
        return {
          ...state,
          pageNumber: action.resultPageNumbers,
        };
      case "SET_CURRENT_PAGE":
        return {
          ...state,
          currentPage: action.currentPage,
        };
      default:
        return { state };
    }
  };

  const [state, dispatch] = useReducer(boletinesReducer, initialState);

  useEffect(() => {
    if (state.currentPage && state.boletinesPerPage) {
      const lastIndex = state.currentPage * state.boletinesPerPage;
      dispatch({ type: "SEX_LAST_INDEX", lastIndex });
    }
  }, [state.currentPage, state.boletinesPerPage]);

  useEffect(() => {
    if (state.indexOfLastBoletines && state.boletinesPerPage) {
      const firstIndex = state.indexOfLastBoletines - state.boletinesPerPage;
      dispatch({ type: "SET_FIRST_INDEX", firstIndex });
    }
  }, [state.indexOfLastBoletines, state.boletinesPerPage]);

  useEffect(() => {
    if (
      state.indexOfFirstBoletines !== undefined &&
      state.indexOfLastBoletines &&
      state.boletines.length > 0
    ) {
      const currentBoletines = state.boletines.slice(
        state.indexOfFirstBoletines,
        state.indexOfLastBoletines
      );
      dispatch({ type: "SET_CURRENT_BOLETINES", currentBoletines });
    }
  }, [
    state.indexOfFirstBoletines,
    state.indexOfLastBoletines,
    state.boletines,
  ]);

  useEffect(() => {
    if (state.boletines && state.boletinesPerPage) {
      const resultPageNumbers = [];
      for (
        let i = 1;
        i <= Math.ceil(state.boletines.length / state.boletinesPerPage);
        i++
      ) {
        resultPageNumbers.push(i);
      }
      dispatch({ type: "SET_PAGE_NUMBERS", resultPageNumbers });
    }
  }, [state.boletines, state.boletinesPerPage]);

  const handleClick = (e) => {
    dispatch({ type: "SET_CURRENT_PAGE", currentPage: e.target.id });
  };

  const [redirection, setRedirection] = useState(false);
  const renderRedirect = () => {
    if (redirection) {
      return <Redirect to="/Vista/View" />;
    }
  };

  const handleRedirect = () => {
    setRedirection(true);
  };
  return (
    <div>
      <div className="div-tabla">
        <table className="tabla">
          <thead>
            <tr className="tr-th">
              <th>
                <strong>Folio</strong>
              </th>
              <th>
                <strong>Proyecto</strong>
              </th>
              <th>
                <strong>Sistema</strong>
              </th>
              <th>
                <strong>Vista</strong>
              </th>
            </tr>
          </thead>

          <tbody>
            {state.currentBoletines &&
              state.currentBoletines.map((boletines, index) => {
                return (
                  <tr key={index} className="tr-general">
                    <td>{boletines.folio}</td>
                    <td>{boletines.proyecto}</td>
                    <td>{boletines.sistema}</td>
                    <td>
                      {renderRedirect()}
                      <button className="btn-list" onClick={handleRedirect}>
                        <i class="material-icons  md-19">open_in_new</i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="page-numbers">
        {state.pageNumber &&
          state.pageNumber.map((number) => {
            return (
              <li key={number} id={number} onClick={handleClick}>
                {" "}
                {number}
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Paginacion;
