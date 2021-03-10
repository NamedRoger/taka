
import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import {Table} from '@themesberg/react-bootstrap'

const TablaPeriodos = (props) => {
    const {data} = props; 

    const totalRows = data.length;
    
    const TableRow = (props) => {
        const {periodo} = props;
        return(
            <tr>
                <td>{periodo.name}</td>
                <td>{periodo.initDate}</td>
                <td>{periodo.finishDate}</td>
                <td>
                    <button>
                        editar
                    </button>
                    <button>
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
                    <td>Periodo</td>
                    <td>Fecha Inicio</td>
                    <td>Fecha Fin</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {data.map(d => <TableRow key={d.idPeriod} periodo={d}></TableRow>)}
            </tbody>
        </Table>
        <Pagination totalRecords={totalRows} pageLimit={1}  pageNeighbours={1}/>
    </>
    );
    
}

TablaPeriodos.prototype = {
    data: PropTypes.array
}

export default TablaPeriodos;