import React, { useState } from 'react';

function BarraFiltro() {
    const [search, setSearch] = useState([]);

    return(
            <div className="div-filtro">
                    <span class="material-icons md-28">filter_list</span>
                    <input className="input-filter" value={search}
                    onChange={event => setSearch({term: event.target.value})}
                    placeholder="Filtro"/>
            </div> 
    )
}

export default BarraFiltro;