import React, { useState } from "react";
import UsuarioCabecera from "../Componentes-secundarios/Usuario-cabecera";
import { useParams } from "react-router-dom";

function BoletinesView({ location }) {
  // const [comment, setComment] = useState("");
  // const [count, setCount] = useState(0);

  console.log(location.state.project);
  return (
    <div className="conteiner contenedor-view">
      <div id="cabecera" className="header">
        <div className="div-icon-header">
          <span className="material-icons md-40">preview</span>
        </div>
        <div className="div-h2">
          <hr className="v" />
          <h2 className="h2">Vista Boletin</h2>
        </div>
        <UsuarioCabecera />
      </div>
      <div className="contenido-view section">
        <div className="view">
          <div id="rectangle" className="titulo-view">
            <h3 className="h3-bol">{location.state.folio}</h3>
          </div>
          <div className="input-view">
            <div className="div-input proyecto">
              <p>Proyecto:</p>{" "}
              <p className="input-bol input-proyecto">
                {location.state.project}
              </p>
            </div>
            <div className="div-input cliente">
              <p>Cliente:</p>{" "}
              <p className="input-bol input-cliente">
                {location.state.customer}
              </p>
            </div>
            <div className="div-input fecha">
              <p>Fecha:</p>
              <p className="input-bol input-fecha-vista">
                {location.state.create}
              </p>
            </div>
            <div className="div-input sistema">
              <p>Sistema:</p>
              <p className="input-bol input-sistema">{location.state.system}</p>
            </div>
            <div className="div-input equipo">
              <p>Equipo:</p>
              <p className="input-bol input-equipo">{location.state.device}</p>
            </div>
            <div className="div-input marca">
              <p>Marca:</p>
              <p className="input-bol input-marca"></p>
            </div>
            <div className="div-input modelo">
              <p>Modelo:</p>
              <p className="input-bol input-modelo"></p>
            </div>
          </div>
          <div className="problema-view disgn">
            <div className="conteiner-problema">
              <h6 className="titulo-problem">Problema:</h6>
              <textarea className="input-problema">
                {location.state.description}
              </textarea>
            </div>
            {/* <div className="conteiner-problema">
              <h6 className="titulo-problem">Imagen problema:</h6>
              <div className="img-problema">
                <i className="img-export-bol" class="material-icons md-56">
                  add_photo_alternate
                </i>
              </div>
            </div> */}
          </div>
          <div className="solucion-view disgn">
            <div className="conteiner-problema">
              <h6 className="titulo-problem">Solución:</h6>
              <textarea className="input-problema">
                {location.state.solution}
              </textarea>
            </div>
            {/* <div className="conteiner-problema">
              <h6 className="titulo-problem">Imagen solución:</h6>
              <div className="img-problema">
                <i className="img-export-bol" class="material-icons md-56">
                  add_photo_alternate
                </i>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="view-coment">
          <div className="titulo-coment">
            <h3 className="h3-bol">Comentarios</h3>
          </div>
          <div className="div-contador">
            <p className="input-contador">
              <span class="material-icons md-5">mode_comment</span>
              {count}{" "}
            </p>
          </div>
          <div className="div-comentar">
            <textarea
              className="input-comentar"
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
            <button
              className="btn btn-comentar"
              onClick={() => setCount(count + 1)}
            >
              Comentar
            </button>
          </div>
          <div className="div-comentarios">
            <div className="div-comentario">
              <span class="material-icons md-24">account_circle</span>
              <p className="p.comentario">{comment}</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default BoletinesView;
