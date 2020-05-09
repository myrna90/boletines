import React, { useState } from 'react';
import FormBoletines from './FormBoletines';
import Steps from './Steps';

const Boletines = () => { 
    const [formValues, setFormValues] = useState({});
    const [currentForm, setCurrentForm] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        /*const values =
            JSON.stringify(this.state);*/
    }
    /*Va a recibir un objeto */
    const getCurrentForm = (name) => {
        const identifier = {
            1: ['folio'],
            2: ['cliente'],
            3: ['problema'],
            4: ['usuario']
        };
    const properties = Object.keys(identifier);
    properties.forEach((property) => {
        if (identifier[property].includes(name)){
            //console.log('entrando');
            setCurrentForm(property);
        };
        
    })  
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        getCurrentForm(name);
        setFormValues({ [name]: value });
    }
    console.log('Form Values', formValues);
    console.log('currentForm', currentForm);
    
    return (
        <div className="conteiner conteiner-boletines">
            {/*Contenedor general header */}
            <div className="header-crear">
                <div className="div-icon-header">
                    <span className="material-icons md-40">add_circle</span>
                </div>
                <div className="div-h2 div-h2-crear">
                    <hr className="v" />
                    <h2 className="h2">Crear boletín</h2>
                    
                </div>
                <Steps currentForm={currentForm}/>
                <div  className="conteiner-usuario">
                <button onSubmit={() => handleSubmit()} type="submit" className="btn-crear btn">+ Crear</button>
                </div>
            </div>
            <div className="contenido section ">
                {/*se pasa la función de handleChange como prop al componente de FormBoletines */}
                
                <FormBoletines handleChange={handleChange}/>
            </div>
    
        </div>
    )
    
}

export default Boletines;