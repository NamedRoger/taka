import React from 'react';

const FormularioPeriodos = (props) => {
  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Periodo" id="periodo" type="text" className="validate" />
          <label htmlFor="periodo">Periodo</label>
        </div>
        <div className="input-field col s6">
          <input id="fechaInicio" type="date" className="validate" />
          <label htmlFor="fechaInicio">Fecha Inicio</label>
        </div>
        <div className="input-field col s6">
          <input id="fechaFin" type="date" className="validate" />
          <label htmlFor="fechaFin">Fecha Fin</label>
        </div>
        <button className="btn">
          Guardar
        </button>
      </div>
    </form>
  );
}

export default FormularioPeriodos;