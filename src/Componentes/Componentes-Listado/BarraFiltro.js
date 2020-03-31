import React, { useState } from 'react';

function BarraFiltro() {
    const [term, setTerm] = useState('');

    return(
            <div className="div-filtro">
                    <span class="material-icons md-28">filter_list</span>
                    <input className="input-filter" value={term}
                    onChange={event => setTerm({term: event.target.value})}
                    placeholder="Filtro"/>
            </div> 
    )
}

export default BarraFiltro;