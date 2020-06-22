import React, { useState, createRef  } from "react";
import { Link, Redirect } from "react-router-dom";
import LogoW2 from "../imgs/logotnW2.png";

const MenuToggle = (props) => {

    const [link, setLink] = useState(false);
    const aside = createRef(true);
    const hide = createRef(true);

   const changeWidth = () => {
        if (aside.current.style.width !== "3.44em" && hide.current.style.display !== true) {
          aside.current.style.width = "3.44em";
          hide.current.style.display = "none";
        } else {
          aside.current.style.width = "12.5em";
          hide.current.style.display = "unset";
        }
      }
    
     const redirectLink = () => {
        setLink({
          redirect: true,
        });
        localStorage.clear("user");
      };
    
     const renderRedirect = () => {
        if (link.redirect) {
          return <Redirect to="/" />;
        }
      };

    return(
        <div className="aside" ref={aside}>
        <div className="menu-toggle">
          <div className="contenedor-titulo">
            <div className="hamburger" id="btn" onClick={changeWidth}>
              <div className="_layer -top"></div>
              <div className="_layer -mid"></div>
              <div className="_layer -bottom"></div>
            </div>
          </div>
          
          <div className="nav-menu">
            <div className="div-logoW">
              <img ref={hide} src={LogoW2} className="logoW-content" />
            </div>
            <div className="div-link">
              <Link to="/Vista/Dashboard" className="Link L-dashboard">
                <i className="material-icons md-24">dashboard</i>
                <div className="textMenu">Dashboard</div>
              </Link>
              <Link to="/Vista/Boletines" className="Link L-boletines">
                <span className="material-icons md-24">add_circle</span>
                <div className="textMenu">Crear Boletin</div>
              </Link>
              <Link to="/Vista/Listado" className="Link L-listado">
                <span className="material-icons md-24">view_list</span>
                <div className="textMenu">Listado boletines</div>
              </Link>
              <Link to="/Vista/MiPerfil" className="Link L-miperfil">
                <i className="material-icons md-24">person</i>
                <div className="textMenu">Mi Perfil</div>
              </Link>
            </div>
          </div>
        </div> 
        <div className="conteiner-btnOut">
          {renderRedirect()}
          <button
            to="/"
            type="submit"
            onClick={() => redirectLink()}
            className="Link link-out"
          >
            <i className="material-icons md-24">exit_to_app</i>
            <div className="textMenu textOut">Salir</div>
          </button>
        </div>
      </div>

    )
}

export default MenuToggle;