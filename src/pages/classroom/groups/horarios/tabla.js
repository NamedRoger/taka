
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@themesberg/react-bootstrap'
import { withRouter,Link } from 'react-router-dom';
// import { Routes } from "../../../routes";

const TablaHorario = (props) => {
    const { data, handleEdit } = props;

    const TableRow = (props) => {
        const { clase } = props;

        return (
            <tr>
                <td>
                    <Link to={`/classroom/grupos/${clase.idGrupo}/periodo/${clase.idPeriodo}/clase/${clase.idClase}`} href>{clase.materia.nombre}</Link> 
                </td>
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
                    {data.map(d => <TableRow key={d.idClase} clase={d} onEdit={handleEdit}></TableRow>)}
                </tbody>
            </Table>
        );
    }

    return (
        <>
            <TableHor></TableHor>
        </>
    );

}

TablaHorario.prototype = {
    data: PropTypes.array
}

export default withRouter(TablaHorario);