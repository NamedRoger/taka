
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@themesberg/react-bootstrap'
import { withRouter } from 'react-router-dom';
// import { Routes } from "../../../routes";

const TablaHorario = (props) => {
    const { horario, data, handleEdit } = props;

    const TableRow = (props) => {
        const { clase } = props;
        console.log(clase.maestro);
        return (
            <tr>
                <td>{clase.materia.nombre}</td>
                <td>{clase.maestro.nombre}</td>
                <td>
                    <button className="btn-primary" onClick={() => { props.onEdit(clase.idClase)}}>
                        editar
                    </button>
                    <button className="btn-danger" onClick={() =>{} }>
                        borrar
                    </button>
                </td>
            </tr>
        );
    }

    const TableHor = (props) => {
        return (
            <Table responsive className="table">
                <thead>
                    <tr>
                        <td>Materia</td>
                        <td>Maestro</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => <TableRow key={d.idMateria} clase={d} onEdit={handleEdit}></TableRow>)}
                </tbody>
            </Table>
        );
    }

    return (
        <>
            {horario ? <TableHor></TableHor>:<span>Arega un horaio</span>
        
        }
        </>
    );

}

TablaHorario.prototype = {
    data: PropTypes.array
}

export default withRouter(TablaHorario);