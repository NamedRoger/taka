import React from 'react';

const FormUsuario = ({onSubmit,onReset,setInput,data}) => {
    
    return(
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Username:</label>
            <input className="form-control" 
            name="name"
            value={data.name} 
            onChange={(e) => {setInput(e.target)}}/>
        </div>

        <div className="form-group">
            <label>Rol</label>
            <select  className="form-control" 
            name="idSpeciality"
            value={data.idSpeciality} 
            onChange={(e) => {setInput(e.target)}}>
                <option value={0}>-- Selecciona una especialidad --</option>
            </select>
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
    );
}

export default FormUsuario;