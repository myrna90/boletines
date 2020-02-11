import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Soporte extends Component{
    render(){
        return(
            <div className="Grid-general">
            <div className="menu">
                <div className="Grid-titulo">
                <h3 className="Grid-h3">Soporte</h3>
                <div className="Grid-btn">
                <button className="btn-config"><img className="img" src="https://image.flaticon.com/icons/svg/1790/1790042.svg"/></button>
                </div>
                <Link to="/Dashboard" className="Link">Dashboard</Link>
                <Link to="/Boletines" className="Link">Boletines</Link>
                <Link to="/Soporte" className="Link">Soporte</Link>
                <Link to="/Login" className="Link">Salir</Link>
                </div> 
            </div>

            <div className="conten ">

            </div>
            </div>
        )
    }
}

export default Soporte;