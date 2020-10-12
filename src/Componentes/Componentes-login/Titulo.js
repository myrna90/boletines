import React from 'react';
import LogoW from '../imgs/logotnW.png';
import Logo from '../imgs/logotn.png';
import ImgPersonas from '../imgs/img-login.png';

const Titulo = () => {
  return (
    <div className='container-titulo'>
      <div className='titular-inicio'>
        <h1>Boletines</h1>
      </div>
      <div className='sub-titulo'>
        <h5>Mejora continua</h5>
      </div>
      <img src={Logo} alt='logo' className='logotn' />
      <img src={LogoW} alt='logoW' className='logoW' />
      <img src={ImgPersonas} alt='gente trabajando' className='miImg' />
    </div>
  );
};

export default Titulo;
