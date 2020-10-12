import React, { useState } from "react";
import Paginacion from "./Paginacion";
import SearchBar from "./searchBar";

const Tabla = (props) => {
  const {currentBoletines} = props;
  const [search, setSearch] = useState(null);
  const [filter, setFilter] = useState([]);


  return (
    <div className="content-list">
     
      {/* <SearchBar/> */}
      <Paginacion/>
    </div>
  );
};

export default Tabla;

/*const data = boletines.boletines
      .filter((boletines) => {
        if (this.state.search == null) return boletines;
        else if (
          boletines.proyecto
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          boletines.sistema
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          boletines.cliente
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          return boletines;
        }
      })
      .map((boletines, index) => {
        return (
            <tr key={index} className="tr-general">
            <td>{boletines.folio}</td>
            <td>{boletines.proyecto}</td>
            <td>{boletines.sistema}</td>
            <td>{renderRedirect()}<button className="btn-list" onClick={handleRedirect}><i class="material-icons  md-19">open_in_new</i></button></td>
          </tr>
        );
      }); 
      
       data() {
    fetch("http://localhost:3000/boletines", {
      method: "GET",
      headers: {
        //Authorization: '',
        "Content-type": "application/json; ",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((boletines) => {
        this.setState({ boletines: boletines });
      });
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };*/
