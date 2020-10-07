import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_BASE_URL } from "../../configuration";
import AuthService from "../../Componentes/Componentes-login/service/auth.service";

const SearchBar = (props) => {

  const [boletinesFilter, setBoletinesFilter] = useState(undefined);
  const token = AuthService.getCurrentUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
    const newsGet = {
        method: "GET",
        url: `${API_BASE_URL}/newsletters`,
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };

      useEffect(() => {
        if (boletinesFilter === undefined) {
          axios(newsGet)
          .then(function(res) {
            setBoletinesFilter(res.data.data);
          });
        }
      }, [boletinesFilter]);

console.log('object', boletinesFilter);

useEffect(() => {
  const results = people.filter(person =>
    person.toLowerCase().includes(searchTerm)
  );
  setSearchResults(results);
}, [searchTerm]);

    return (
<div className="div-filtro">
        <span className="material-icons md-28">filter_list</span>
        <input
          className="input-filter"
          type="text"
          placeholder="Filtro"
          // defaultValue={state.search}
          // onChange={(e) => handleChange(e)}
        />
      </div>
    )
}

export default SearchBar;