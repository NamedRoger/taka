import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import { Table } from '@themesberg/react-bootstrap'

const TablaEspecialidad = (props) => {
    const { data,onSelect } = props;
    const totalRows = data.length;
    const TableRow = (props) => {
        const { especialidad } = props;
        return (
            <tr>
                <td>{especialidad.nombre}</td>
                <td>{especialidad.codigo}</td>
                <td>
                    <button className="btn-primary"
                    onClick={() => {
                        onSelect({
                            id:especialidad.idEspecialidad,
                            operation:'edit'
                        })
                    }}>
                        editar
                    </button>
                    <button className="btn-danger"
                    onClick={() => {
                        onSelect({
                            id:especialidad.idEspecialidad,
                            operation:'delete'
                        })
                    }}>
                        borrar
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <td>Especialidad</td>
                        <td>Código</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => <TableRow key={d.idEspecialidad} especialidad={d} />)}
                </tbody>
            </Table>
            <Pagination totalRecords={totalRows} pageLimit={20} pageNeighbours={1} />
        </>
    );

}

TablaEspecialidad.prototype = {
    data: PropTypes.array
}

export default TablaEspecialidad;