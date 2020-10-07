import React, { useState, useEffect } from 'react';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';
import AuthService from '../Componentes-login/service/auth.service';
import axios from 'axios';
import { API_BASE_URL } from '../../configuration';
function BoletinesView({ location }) {
  const { token } = AuthService.getCurrentUser();
  const [newsletter, setNewsletter] = useState(undefined);
  useEffect(() => {
    if (newsletter === undefined) {
      axios
        .get(`${API_BASE_URL}/newsletters/${location.state.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setNewsletter(res.data);
        });
    }
  });
  return (
    <div className='conteiner contenedor-view'>
      <div id='cabecera' className='header'>
        <div className='div-icon-header'>
          <span className='material-icons md-40'>preview</span>
        </div>
        <div className='div-h2'>
          <hr className='v' />
          <h2 className='h2'>Vista Boletin</h2>
        </div>
        <UsuarioCabecera />
      </div>
      <div className='contenido-view section'>
        <div className='view'>
          <div id='rectangle' className='titulo-view'>
            {newsletter ? (
              <h4 className='h3-bol'>
                {newsletter.data.folio} | <small>{newsletter.data.title}</small>
              </h4>
            ) : (
              <h3 className='h3-bol'></h3>
            )}
            <span className='shareButton'>
              compatir<i className='material-icons'>share</i>
            </span>
          </div>
          <div className='input-view'>
            <div className='div-input proyecto'>
              <p>Proyecto:</p>{' '}
              {newsletter ? (
                <p className='input-bol input-proyecto'>
                  {newsletter.data.project[0].name}
                </p>
              ) : (
                <p className='input-bol input-proyecto'></p>
              )}
            </div>
            <div className='div-input cliente'>
              <p>Propietario:</p>{' '}
              {newsletter ? (
                <p className='input-bol input-cliente'>
                  {newsletter.data.owner[0].firstname}
                </p>
              ) : (
                <p className='input-bol input-cliente'></p>
              )}
            </div>
            <div className='div-input fecha'>
              <p>Fecha de creación:</p>
              {newsletter ? (
                <p className='input-bol input-fecha-vista'>
                  {newsletter.data.createDate.split('T')[0]}
                </p>
              ) : (
                <p className='input-bol input-fecha-vista'></p>
              )}
            </div>
            <div className='div-input sistema'>
              <p>Sistema:</p>
              {newsletter ? (
                <p className='input-bol input-sistema'>
                  {newsletter.data.system[0].name}
                </p>
              ) : (
                <p className='input-bol input-sistema'></p>
              )}
            </div>
            <div className='div-input equipo'>
              <p>Equipo:</p>
              {newsletter ? (
                <p className='input-bol input-equipo'>
                  {newsletter.data.device[0].name}
                </p>
              ) : (
                <p className='input-bol input-equipo'></p>
              )}
            </div>
            <div className='div-input marca'>
              <p>Marca:</p>
              {newsletter ? (
                <p className='input-bol input-marca'>
                  {' '}
                  {newsletter.data.device[0].brand}
                </p>
              ) : (
                <p className='input-bol input-marca'></p>
              )}
            </div>
            <div className='div-input modelo'>
              <p>Modelo:</p>
              {newsletter ? (
                <p className='input-bol input-modelo'>
                  {' '}
                  {newsletter.data.device[0].model}
                </p>
              ) : (
                <p className='input-bol input-modelo'></p>
              )}
            </div>
          </div>
          <div className='problema-view disgn'>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Problema:</h6>
              {newsletter ? (
                <textarea
                  disabled
                  className='input-problema'
                  value={newsletter.data.description}
                ></textarea>
              ) : (
                <textarea className='input-problema'></textarea>
              )}
            </div>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Imagen problema:</h6>
              <div className='img-problema'>
                {newsletter ? (
                  <img
                    className='imgBase64'
                    alt='problema'
                    src={newsletter.images.imageProblem}
                  ></img>
                ) : (
                  <i className='img-export-bol material-icons md-56'></i>
                )}
              </div>
            </div>
          </div>
          <div className='solucion-view disgn'>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Solución:</h6>
              {newsletter ? (
                <textarea
                  disabled
                  className='input-problema'
                  value={newsletter.data.solution}
                ></textarea>
              ) : (
                <textarea className='input-problema'></textarea>
              )}
            </div>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Imagen solución:</h6>
              <div className='img-problema'>
                {newsletter ? (
                  <img
                    className='imgBase64'
                    alt='solución'
                    src={newsletter.images.imageSolution}
                  ></img>
                ) : (
                  <i className='img-export-bol material-icons md-56'></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoletinesView;
