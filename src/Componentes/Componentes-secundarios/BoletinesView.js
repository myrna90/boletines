import React, { useState, useEffect } from 'react';
import UsuarioCabecera from '../Componentes-secundarios/Usuario-cabecera';
import AuthService from '../Componentes-login/service/auth.service';
import axios from 'axios';
import { API_BASE_URL } from '../../configuration';

//Loading
import Skeleton from 'react-loading-skeleton';
//Modal
import ModalShare from './modalShare';

function BoletinesView(props) {
  const { id } = props.match.params;
  const { token } = AuthService.getCurrentUser();
  const [newsletter, setNewsletter] = useState(undefined);

  useEffect(() => {
    if (newsletter === undefined) {
      axios
        .get(`${API_BASE_URL}/newsletters/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
          console.log(res.data);
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
              <h3 className='h3-bol'> </h3>
            )}
            {newsletter ? (
              <ModalShare parentSelector={() => document.querySelector('#root')} idNewsletter={newsletter.data._id}>
                <p>Modal Content.</p>
              </ModalShare>
            ) : (
              <ModalShare parentSelector={() => document.querySelector('#root')} idNewsletter>
                <p>Modal Content.</p>
              </ModalShare>
            )}
          </div>
          <div className='input-view'>
            <div className='div-input proyecto'>
              <p>Proyecto:</p>
              {''}
              {newsletter ? (
                <p className='input-bol input-proyecto'>{newsletter.data.project[0].name}</p>
              ) : (
                <p className='input-bol input-proyecto'>
                  <Skeleton />
                </p>
              )}
            </div>
            <div className='div-input cliente'>
              <p>Propietario:</p>{' '}
              {newsletter ? (
                <p className='input-bol input-cliente'>{newsletter.data.owner[0].firstname}</p>
              ) : (
                <p className='input-bol input-cliente'>
                  <Skeleton />
                </p>
              )}
            </div>
            <div className='div-input fecha'>
              <p>Fecha de creación:</p>
              {newsletter ? (
                <p className='input-bol input-fecha-vista'>{newsletter.data.createDate.split('T')[0]}</p>
              ) : (
                <p className='input-bol input-fecha-vista'>
                  <Skeleton />
                </p>
              )}
            </div>
            <div className='div-input sistema'>
              <p>Sistema:</p>
              {newsletter ? (
                <p className='input-bol input-sistema'>{newsletter.data.system[0].name}</p>
              ) : (
                <p className='input-bol input-sistema'>
                  <Skeleton />
                </p>
              )}
            </div>
            <div className='div-input equipo'>
              <p>Equipo:</p>
              {newsletter ? (
                <p className='input-bol input-equipo'>
                  {newsletter.data.device.length === 0 ? '-' : newsletter.data.device[0].name}
                </p>
              ) : (
                <p className='input-bol input-equipo'>
                  <Skeleton />
                </p>
              )}
            </div>
            <div className='div-input marca'>
              <p>Marca:</p>
              {newsletter ? (
                <p className='input-bol input-marca'>
                  {newsletter.data.device.length === 0 ? '-' : newsletter.data.device[0].brand}
                </p>
              ) : (
                <p className='input-bol input-marca'>
                  <Skeleton />
                </p>
              )}
            </div>
            <div className='div-input modelo'>
              <p>Modelo:</p>
              {newsletter ? (
                <p className='input-bol input-modelo'>
                  {newsletter.data.device.length === 0 ? '-' : newsletter.data.device[0].model}
                </p>
              ) : (
                <p className='input-bol input-modelo'>
                  <Skeleton />
                </p>
              )}
            </div>
          </div>
          <div className='problema-view disgn'>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Problema:</h6>
              {newsletter ? (
                <textarea disabled className='input-problema' value={newsletter.data.description}></textarea>
              ) : (
                <Skeleton count={5} />
              )}
            </div>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Imagen problema:</h6>
              <div className='img-problema'>
                {newsletter ? (
                  <img className='imgBase64' alt='problema' src={newsletter.images.imageProblem}></img>
                ) : (
                  <Skeleton height={100} />
                )}
              </div>
            </div>
          </div>
          <div className='solucion-view disgn'>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Solución:</h6>
              {newsletter ? (
                <textarea disabled className='input-problema' value={newsletter.data.solution}></textarea>
              ) : (
                <Skeleton count={5} />
              )}
            </div>
            <div className='conteiner-problema'>
              <h6 className='titulo-problem'>Imagen solución:</h6>
              <div className='img-problema'>
                {newsletter ? (
                  <img className='imgBase64' alt='solución' src={newsletter.images.imageSolution}></img>
                ) : (
                  <Skeleton height={100} />
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
