import Axios from 'axios';
import React from 'react';
import Modal from 'react-modal';
import { API_BASE_URL } from '../../configuration';
import AuthService from '../Componentes-login/service/auth.service';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    padding: '0px',
  },
};

Modal.setAppElement('#root');

function ModalShare(prop) {
  const { token, user } = AuthService.getCurrentUser();
  const username = `${user.firstname} ${user.lastname}`;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showSend, setShowSend] = React.useState(false);
  const [sendSucess, setSendSucess] = React.useState(false);
  const idNewsletter = prop.idNewsletter;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setShowSend(false);
    setSendSucess(false);
    setIsOpen(false);
  }
  const submitDataShare = (e) => {
    setShowSend(true);
    e.preventDefault();
    const email = e.target[0].value;
    const message = e.target[1].value;
    const data = {
      user: username,
      email,
      message,
    };
    Axios.post(`${API_BASE_URL}/newsletters/share/${idNewsletter}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setSendSucess(true);
        setTimeout(() => {
          closeModal();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <span className='shareButton' onClick={openModal}>
        compatir<i className='material-icons material-icons-share'>share</i>
      </span>
      <Modal
        closeTimeoutMS={100}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Send Newsletter'
      >
        <div className='modal__share_newsletter'>
          <div className='modal__share_newsletter--header'>
            <h4 className='modal__share_newsletter__header--title'>
              Enviar boletín
            </h4>
            <span
              className='modal__share_newsletter__header--close'
              onClick={closeModal}
            >
              <i className='material-icons material-icons-close'>close</i>
            </span>
          </div>
          <div className='modal__share_newsletter--content'>
            {showSend ? (
              <div className='modal__share_newsletter__send-content'>
                {sendSucess ? (
                  <span>El Boletín se ha compartido</span>
                ) : (
                  <Loader></Loader>
                )}
              </div>
            ) : (
              <form onSubmit={submitDataShare}>
                <div className='modal__share_newsletter--content-formgroup'>
                  <label>Correo electrónico:</label>
                  <input
                    type='email'
                    required
                    name='email'
                    className='input'
                    placeholder='correo@correo.com'
                  />
                </div>
                <div className='modal__share_newsletter--content-formgroup'>
                  <label>
                    Mensaje<small>(opcional):</small>
                  </label>
                  <textarea
                    className='text'
                    cols='50'
                    placeholder='Agregue su mensaje'
                  ></textarea>
                </div>
                <div className='modal__share_newsletter--content-submit'>
                  <button type='submit'>Enviar</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

const Loader = () => (
  <div className='lds-ellipsis'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default ModalShare;
