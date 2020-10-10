import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../configuration";
import AuthService from "../../Componentes/Componentes-login/service/auth.service";

const SearchBar = (props) => {
  const token = AuthService.getCurrentUser();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newslettersData, setNewslettersData] = useState(undefined);

  const newsGet = {
    method: 'GET',
    url: `${API_BASE_URL}/newsletters`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  useEffect(() => {
    if (newslettersData === undefined) {
      axios(newsGet).then(function(res) {
        setNewslettersData(res.data.data);
      });
    }
  }, [newslettersData]);

  console.log(newslettersData);

  const searchResultMap = () => {
    searchResults.map(boletin => {
      return (
       <div>
          <tr className="tr-general">
          <td>{boletin.folio}</td>
          
          <td>{boletin.project[0].name}</td>
          <td>{boletin.system[0].name}</td>
          <td>
            {boletin.owner[0].firstname} {boletin.owner[0].lastname}
          </td>
          <td>
            <Link
                  to={{
                    pathname: '/vista/view/',
                    state: {
                      id: `${boletin._id}`,
                    },
                  }}
                  className='btn-list'
                >
                  <i className='material-icons  md-19'>open_in_new</i>
                </Link>
          </td>
        </tr> 
       </div>
      )
    })
  } 
  // const handleChange = (event) => {
  //   let keyword = event.target.value;
  //   setSearch({search: keyword})
    // setSearchResults(event.target.value);
    // console.log("object", event.target.value);};
  

  return (
    <div>
      <div className="div-filtro">
        <span className="material-icons md-28">filter_list</span>
        <input
          className="input-filter"
          type="text"
          placeholder="Filtro"
          defaultValue={search}
          onChange={(e) => setSearchResults(e.target.value)}
        />
      </div>
      <div className="div-tabla">
        <table className="tabla">
          <thead key="thead">
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
                <strong>Reporta</strong>
              </th>
              <th>
                <strong>Vista</strong>
              </th>
            </tr>
          </thead>
          <tbody>
          {/* */}
          {searchResultMap}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
