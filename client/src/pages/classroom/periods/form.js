import React from 'react';


const FormPeriodos = ({onSubmit,onChage,data,onReset}) => {
    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" 
                    name="name"
                    value={data.name} 
                    onChange={(e) => {onChage(e.target)}}/>
                </div>

                <div className="form-group">
                    <label>Fecha Inicio</label>
                    <input type="date" 
                    className="form-control"
                    name="initDate"
                    value={data.initDate}
                    onChange={(e) => {onChage(e.target)}}/>
                </div>

                <div className="form-group">
                    <label>Fecha Fin</label>
                    <input type="date" className="form-control"
                    name="finishDate"
                    value={data.finishDate}
                    onChange={(e) => {onChage(e.target)}}/>
                </div>

                <div className="form-group mt-2">
                    <input type="submit"
                    className="btn btn-success btn-sm"
                    value="Guardar">
                        
                    </input>
                    <button className="btn btn-danger btn-sm" 
                    type="reset"
                    onClick={onReset}>
                        Cancelar
                    </button>
                </div>
               
            </form>
        </>
    );
}

export default FormPeriodos;