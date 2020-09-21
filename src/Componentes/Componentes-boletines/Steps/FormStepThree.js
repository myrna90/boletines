import React, { useState } from "react";

const FormStepThree = (props) => {
  const { handleChange } = props;
  const { deviceData } = props;

  const [formImage, setFormImage] = useState({
    device: "",
    brand: "",
    model: "",
    description: "",
    imgProblema: "",
    solution: "",
    imgSolucion: ""
  });

  const [image, setImage] = useState({ file: "", imagePreview: "" });
  const [imageTwo, setImageTwo] = useState({ fileTwo: "", imagePreviewSol: "" });

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
        file,
        imagePreview: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeTwo = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let fileTwo = e.target.files[0];

    reader.onloadend = () => {
      setImageTwo({
        fileTwo,
        imagePreviewSol: reader.result,
      });
    };
    if (fileTwo) {
      reader.readAsDataURL(fileTwo);
    }
  };

  return (
    /*parte del formulario para descripcion y solución del problema */
    <div className="div div-3">
      {/*Div contenido espacio descripción, imagenes y solución */}
      <div className="conteiner-numero numero-div3">
        <div className="numero">3</div>
        <strong>
          <p className="p">Descripción</p>
        </strong>
      </div>
      <div className="div1 div3-content">
        {/*Div contenido espacio descripción problema*/}
        <div className="contenForm">
          <label className="label label-text-area">
            Descripción del problema
          </label>
          <textarea
            className=" text-problema text"
            name="description"
            defaultValue={formImage.description}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>

        {/*Div contenido espacio descripción solución*/}
        <div className="contenForm2">
          <label className="label label-text-area ">
            Solución del problema
          </label>
          <textarea
            className=" text-solucion text"
            name="solution"
            defaultValue={formImage.solution}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
        </div>

        {/*Div contenido espacio imagen problema */}
        <div className="contenForm conten-img">
          <label htmlFor="myuniqueid" className="label label-img">
            Problema imagen
          </label>
          <div className=" conten-export-img">
            {image.imagePreview ? (
              <img src={image.imagePreview} className="imgExport" />
            ) : (
              <div>
            <input
              id="myuniqueid"
              type="file"
              name="pictureName"
              className="inputimg"
              onChange={(e) => handleImageChange(e)}
              
            />
          </div>
            )}
          </div>
        </div>
        {/*Div contenido espacio imagen solución */}
        <div className="contenForm conten-img2">
          <label htmlFor="myuniqueid2" className="label label-img">
            Solución imagen
          </label>
          <div className=" conten-export-img">
          {imageTwo.imagePreviewSol ? (
              <img src={imageTwo.imagePreviewSol} className="imgExport" />
            ) : (
              <div >
            <input
              id="myuniqueid2"
              type="file"
              name="pictureName"
              className="inputimg"
              onChange={(e) => handleImageChangeTwo(e)}
              
            />
          </div>
            )}
          </div>
        </div>

        {/*Div contenido inputs equipo, modelo, marca */}
        <div className="content-inputs">
          {/*Input equipo */}
          <label className=" label label-div">Equipo</label>
          <div className="div-icon-info">
            <select
              className="input input-div"
              name="device"
              defaultValue={formImage.device}
              onChange={(e) => handleChange(e)}
            >
              <option>-</option>
              {deviceData && deviceData.map((device) => (
                <option value={device._id}>{device.name}</option>
              ))}
            </select>
            <a className="caja3">
              <span className="material-icons md-4">info</span>
              <span className="info">
                Seleccionar proyecto <br />
                donde ocurrio el problema
              </span>
            </a>
          </div>

          {/*Input marca */}
          <label className=" label label-div2">Marca</label>
          <div className="div-icon-info">
            <select
              className="input input-div2"
              name="brand"
              defaultValue={formImage.brand}
              onChange={(e) => handleChange(e)}
            >
              <option>-</option>
              {deviceData && deviceData.map((device) => (
                <option value={device._id}>{device.brand}</option>
              ))}
            </select>
            <a className="caja3">
              <span className="material-icons md-4">info</span>
              <span className="info">
                Seleccionar proyecto <br />
                donde ocurrio el problema
              </span>
            </a>
          </div>

          {/*Input modelo */}
          <label className=" label label-div3">Modelo</label>
          <div className="div-icon-info">
            <select
              className="input input-div3"
              name="model"
              defaultValue={formImage.model}
              onChange={(e) => handleChange(e)}
            >
              <option>-</option>
               {deviceData && deviceData.map((device) => (
                <option value={device._id}>{device.model}</option>
              ))}
            </select>
            <a className="caja3">
              <span className="material-icons md-4">info</span>
              <span className="info">
                Seleccionar proyecto <br />
                donde ocurrio el problema
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStepThree;

/*const upImage = useRef({ imagProb: '', imagSolu: '' });

   imgUp = () => {
        const file = this.refs.uploadImg.files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
            upImage({
                imagProb: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            upImage({
                imagProb: reader.result
            })
        }
        else {
            upImage({
                imagProb: ""
            })
        }
    }

    const imgUp2 = () => {

        const file = this.refs.uploadImg2.files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imagSolu: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                imagSolu: reader.result
            })
        }
        else {
            this.setState({
                imagSolu: ""
            })
        }
    }

    const changeInput = (event) => {
        const file = event.target.files[0]
      
        // User cancelled
        if (!file) {
          return
        }
    }*/
