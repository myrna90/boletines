import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../configuration";
import AuthService from "../../Componentes/Componentes-login/service/auth.service";

const SearchBar = (props) => {
  const [newslettersData, setNewslettersData] = useState({data: []});
  const token = AuthService.getCurrentUser();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const newsGet = {
    method: "GET",
    url: `${API_BASE_URL}/newsletters`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };
  
  useEffect(() => {
    console.log('data', newslettersData);
    if (newslettersData === []) {
      axios(newsGet).then((res) => {
        setNewslettersData(res.data.data);
      });
    }
  }, [newslettersData]);

  const handleChange = (event) => {
    setSearchResults(event.target.value);
    console.log("object", event.target.value);
  };

  useEffect(() => {
    const results = newslettersData.filter((boletin) =>
     boletin.project.toLowerCase().includes(search.toLocaleLowerCase()) 
    );
    setSearchResults(results);
  }, [search]);

console.log('result', searchResults);
  return (
    <div>
      <div className="div-filtro">
        <span className="material-icons md-28">filter_list</span>
        <input
          className="input-filter"
          type="text"
          placeholder="Filtro"
          defaultValue={search}
          onChange={(event) => handleChange(event)}
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
          {/* <tbody>
            {newslettersData &&
              newslettersData.map((boletines, index) => (
                <tr key={index} className="tr-general">
                  <td>{boletines.folio}</td>
                  
                  <td>{boletines.project[0].name}</td>
                  <td>{boletines.system[0].name}</td>
                  <td>
                    {boletines.owner[0].firstname} {boletines.owner[0].lastname}
                  </td>
                  <td>
                    <Link
                      to={{
                        pathname: "/vista/view/",
                        state: {
                          id: `${boletines._id}`,
                          folio: `${boletines.folio}`,
                          title: `${boletines.title}`,
                          create: `${boletines.createDate}`,
                          description: `${boletines.description}`,
                          solution: `${boletines.solution}`,
                          project: `${boletines.project[0].name}`,
                          system: `${boletines.system[0].name}`,
                          device: `${boletines.device[0].name}`,
                        },
                      }}
                      className="btn-list"
                    >
                      <i className="material-icons  md-19">open_in_new</i>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
