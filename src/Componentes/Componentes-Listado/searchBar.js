import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../configuration";
import AuthService from "../../Componentes/Componentes-login/service/auth.service";

const SearchBar = (props) => {
  const token = AuthService.getCurrentUser();
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // // const [newslettersData, setNewslettersData] = useState({data: []});

  // const [newsletter, setNewsletter] = useState([]);
  const [data ,setData] = useState([]);
  const [filtered ,setFilterd] = useState([]);
  const [result , setResult] = useState("");

  useEffect(()=>{
    const fetchData = async () => {
            try{
                const res = await axios.get(`${API_BASE_URL}/newsletters`, {
                  headers: { Authorization: `Bearer ${token.token}` },
                });
                setData(res.data.data);
                setFilterd(res.data);
            }catch(err){
                throw new Error(err);
            }
             };
          fetchData(); 
},[]);
  console.log(data);

//   useEffect(()=> {
//     const results = filtered.filter(res => res.project[0].name.toLowerCase().includes(result.toLowerCase())
//     ); 
//     setData(results)
// } ,[result]);

const onChange = (e) => {
  setResult(e.target.value);
}

  return (
    <div>
      <div className="div-filtro">
        <span className="material-icons md-28">filter_list</span>
        <input
          className="input-filter"
          type="text"
          placeholder="Filtro"
          defaultValue={result}
          onChange={(e) => onChange(e.target.value)}
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
          {data && data.map((boletin, index) => (
            <tr key={index} className="tr-general">
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
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
