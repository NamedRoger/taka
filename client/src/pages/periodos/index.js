import React from 'react';
import FormularioPeriodos from '../../views/periodos/formulario-periodos';
import TablaPeriodos from '../../views/periodos/tabla-periodos';

const PeridosIndex = () => {
    return(
        <div className="row">
            <h1>Periodos</h1>
            <FormularioPeriodos></FormularioPeriodos>
            <TablaPeriodos></TablaPeriodos>
        </div>
    );
}

export default PeridosIndex;