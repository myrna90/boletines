import React from 'react';
import axios from 'axios';

export function get () {
    return axios.get('http://localhost:3000/api/boletines');
}