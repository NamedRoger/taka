import React from 'react';


const FormGrupos = ({onSubmit,onChage,data,onReset}) => {
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
                    <label>Especialidad</label>
                    <select  className="form-control" 
                    name="idSpeciality"
                    value={data.name} 
                    onChange={(e) => {onChage(e.target)}}>
                        <option value={0}>-- Selecciona una especialidad --</option>

                    </select>
                </div>

                <div className="form-group mt-2">
                    <input type="submit"
                    className="btn btn-success btn-sm">
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

export default FormGrupos;