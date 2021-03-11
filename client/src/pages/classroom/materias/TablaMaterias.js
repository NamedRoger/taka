import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import {Table} from '@themesberg/react-bootstrap'

const TablaEspecialidad = (props) => {
    const {data} = props; 
    const totalRows = data.length;

    const TableRow = (props) => {
        const {materias} = props;
        return(
            <tr>
                <td>{materias.name}</td>
                <td>
                    <button className="btn-primary"
                    onClick={() => {
                        
                    }}>
                        editar
                    </button>
                    <button className="btn-danger"
                    onClick={() => {
                        
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
                    <td>Materia</td>
                    <td>Código</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => <TableRow key={i} periodo={d} />)}
            </tbody>
        </Table>
        <Pagination totalRecords={totalRows} pageLimit={20} pageNeighbours={1}/>
    </>
    );
    
}

TablaEspecialidad.prototype = {
    data: PropTypes.array
}

export default TablaEspecialidad;