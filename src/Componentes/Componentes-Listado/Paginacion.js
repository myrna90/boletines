import React, { Component } from 'react';
import Axios from 'axios';
import boletines from '../boletines.json';
import usePagination from 'use-pagination'

const data = boletines.boletines.map((boletines) => {
   
    return (
      console.log(boletines.folio)
    )
  });
const Paginacion = (props) => {
    const pagination = usePagination({
        data: [],
        itemsPerPage: 2,
      });
return(
<div>
    <pre>
      { JSON.stringify(pagination, null, 2 )}
    </pre>
    <button onClick={pagination.onNextPage}>Next</button>
    <button onClick={pagination.onPreviousPage}>Back</button>
    <button onClick={pagination.onResetPage}>Reset</button>
  </div>
)
    
}


export default Paginacion;