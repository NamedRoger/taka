
import React from 'react';
import Pagination from '../../../components/Pagination';
import PropTypes from 'prop-types';

const TablaPeriodos = (props) => {
    const {data} = props; 
    const TableRow = () => {
        return(
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }

    return (
    <>
        <table>
            <thead>

            </thead>
            <tbody>

            </tbody>
        </table>
        <Pagination totalRecors={30} pageLimit={20}  pageNeighbours={1}/>
    </>
    );
    
}

TablaPeriodos.prototype = {
    data: PropTypes.array
}

export default TablaPeriodos;