import React, { useState, useEffect } from 'react';
import axios from "axios";

const SearchBar = (props) => {

    const newsGet = {
        method: "GET",
        url: `${API_BASE_URL}/newsletters`,
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };

      useEffect(() => {
        if (state.boletines === undefined) {
          axios(newsGet).then(function(res) {
            dispatch({ type: "FETCH_BOLETINES", boletines: res.data.data });
          });
        }
      }, [state.boletines]);
    return (
        <div>

        </div>
    )
}