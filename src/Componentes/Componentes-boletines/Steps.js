import React from "react";

export default (props) => {
  const { currentForm } = props;
  console.log(props, "steps");

  return (
    /*Componente steps tabla superios en boletines */
    <div className="div-steps">
      <div className="steps step1">
        <p className={currentForm === "1" ? "is-form-selected" : ""}>
          1. Folio
        </p>
      </div>
      <div className="steps step2">
        <p className={currentForm === "2" ? "is-form-selected" : ""}>
          2. Proyecto
        </p>
      </div>
      <div className="steps step3">
        <p className={currentForm === "3" ? "is-form-selected" : ""}>
          3. Descripción
        </p>
      </div>
      <div className="steps step4">
        <p className={currentForm === "4" ? "is-form-selected" : ""}>
          4. Usuario
        </p>
      </div>
    </div>
  );
};
