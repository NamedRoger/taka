import React, { useCallback, useEffect, useState } from 'react';

import { Modal, Button } from '@themesberg/react-bootstrap';
import * as maestroService from '../../../../services/maestros';
import * as materiasService from '../../../../services/materias';

const ModalClase = (props) => {
  const [maestros, setMaestros] = useState([]);
  const [materias, setMaterias] = useState([]);

  

  const getMaestros = useCallback(() => {
    maestroService.getMaestros().then(res => {
      setMaestros(res.data);
    });
  },[]);

  const getMaterias = useCallback(() => {
    materiasService.getMaterias().then(res => {
      setMaterias(res);
    });
  },[]);


  useEffect(() => {
    getMaestros();
    getMaterias();
  },[getMaestros,getMaterias]);


  return (

    <Modal {...props} >
      <Modal.Header closeButton>
        <Modal.Title>{props.title} Clase</Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body>
          <div className="form-group ">
            <label>Materia</label>
            <select 
            className="form-control" 
            name="idMateria"
            value={props.clase.idMateria}
            onChange={props.onChange}>
              <option value={0}>--Selecciona la materia--</option>
              {materias.map(m => <option key={m.idMateria} value={m.idMateria}>{m.nombre}</option>)}
            </select>
          </div>

          <div className="form-group mt-2">
            <label>Maestro</label>
            <select className="form-control"
            name="idMaestro" 
            value={props.clase.idMaestro} 
            onChange={props.onChange}>
              <option value={0}>--Selecciona el maestro--</option>
              {maestros.map(m => <option key={m.idUsuario} value={m.idUsuario}>{m.nombre}</option>)}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide} >
            Cancelar
              </Button>
          <Button variant="primary" onClick={props.onSubmit}>
            Guardar
              </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalClase;