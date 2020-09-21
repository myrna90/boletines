import React, { useState, useEffect, useReducer } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {arrayToObject} from '../../utils/utils';

const Paginacion = () => {
  const initialState = {
    boletines: undefined,
    currentPage: 1,
    boletinesPerPage: 10,
    indexOfLastBoletines: undefined,
    indexOfFirstBoletines: undefined,
    currentBoletines: undefined,
    pageNumber: [],
    projects: undefined,
    systems: undefined
  };

  const boletinesReducer = (state, action) => {
    switch (action.type) {
      case "SET_LAST_INDEX":
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
      case "FETCH_BOLETINES":
        console.log("action entrando...", action);
        return {
          ...state,
          boletines: action.boletines,
        };

      case "FETCH_PROJECTS":
      
        return {
          ...state,
          projects: action.projects,
        };
        case "FETCH_SYSTEMS":
          return {
            ...state,
            systems: action.systems
          }

      default:
        return { state };
    }
  };

  const [state, dispatch] = useReducer(boletinesReducer, initialState);

  useEffect(() => {
    if (state.boletines === undefined) {
      axios.get("http://localhost:3000/api/newsletters").then(function(res) {
        dispatch({ type: "FETCH_BOLETINES", boletines: res.data.data });
      });
    }
  }, [state.boletines]);

  useEffect(() => {
    if (state.projects === undefined) {
      axios.get("http://localhost:3000/api/projects").then(function(res) {
        dispatch({ type: "FETCH_PROJECTS", projects: res.data.data });
      });
    }
  }, [state.projects]);

  useEffect(() => {
    if (state.systems === undefined) {
      axios.get("http://localhost:3000/api/systems").then(function(res) {
       dispatch({ type: "FETCH_SYSTEMS", systems: res.data.data })
      });
    }
  }, [state.systems]);

  useEffect(() => {
    if (state.currentPage && state.boletinesPerPage) {
      const lastIndex = state.currentPage * state.boletinesPerPage;
      dispatch({ type: "SET_LAST_INDEX", lastIndex });
    }
  }, [state.currentPage, state.boletinesPerPage]);

  useEffect(() => {
    if (state.indexOfLastBoletines && state.boletinesPerPage) {
      const firstIndex = state.indexOfLastBoletines - state.boletinesPerPage;
      dispatch({ type: "SET_FIRST_INDEX", firstIndex });
    }
  }, [state.indexOfLastBoletines, state.boletinesPerPage]);

  useEffect(() => {
    if (state.boletines !== undefined) {
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
                    {/*en fecha va proyecto y en descripcion va sistema corregir */}
                   
                    <td>
                    { state.projects ? state.projects.find(project => project._id === boletines.project).name: ''}
                    </td>
                    <td>
                    {/*state.systems ? state.systems.find(system => system._id === boletines.system).name: ''*/}
                    </td>
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
