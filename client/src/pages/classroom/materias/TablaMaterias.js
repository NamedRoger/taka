import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';
import {Table} from '@themesberg/react-bootstrap'

const TablaEspecialidad = (props) => {
    const {data} = props; 
    const totalRows = data.length;
    const TableRow = ({column}) => {
        const TableRow = (props) => {
            const {especialidad} = props;
            return(
                <tr>
                    <td>{especialidad.name}</td>
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
    }

    return (
    <>
        <Table responsive>
            <thead>
            <tr>
                    <td>Nombre</td>
                </tr>
            </thead>
            <tbody>
              {data.map((d,i)=> <TableRow key={i} periodo={d} />)}  
            </tbody>
            </Table>
        <Pagination totalRecords={totalRows} pageLimit={1} pageNeighbours={1}/>
    </>
    );
    
}

TablaEspecialidad.prototype = {
    data: PropTypes.array
}

export default TablaEspecialidad;