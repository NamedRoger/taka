import React from 'react';


const FormPeriodos = (props) => {
    return(
        <>
            <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Fecha Inicio</label>
                    <input type="date" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Fecha Fin</label>
                    <input type="date" className="form-control"/>
                </div>

                <div className="form-group mt-2">
                    <button className="btn btn-success btn-sm">
                        Guardar
                    </button>

                    <button className="btn btn-danger btn-sm">
                        Cancelar
                    </button>
                </div>
               
            </form>
        </>
    );
}

export default FormPeriodos;