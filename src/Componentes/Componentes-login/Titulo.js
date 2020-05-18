import React from 'react';
import LogoW from '../imgs/logotnW.png';
import Logo from '../imgs/logotn.png';
import ImgPersonas from '../imgs/img-login.png'

const Titulo = () => {
    return(
        <div className="conteiner-titulo">
            <div className="titular-inicio">
              <h1>Boletines</h1>
            </div>
            <div className='sub-titulo'>
              <h5 >Mejora continua</h5>
            </div>
            <img src={Logo} className="logotn" />
            <img src={LogoW} className="logoW" />
            <img src={ImgPersonas} className="miImg" />
          </div>
    )
}

export default Titulo;