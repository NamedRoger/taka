import React, { useState,useEffect} from 'react';
import * as serviceEspecialidades  from '../../../services/especialidades.js';

const getEspecialidades = async () => {
    let especialidades = [];
    try{
        especialidades = await serviceEspecialidades.getEspecialidades();
        return especialidades;
    }catch(e){
        return especialidades;
    }
}

const FormGrupos = ({onSubmit,onChage,data,onReset}) => {
    const [especialidades,setEspecialidades] = useState([]);
    useEffect(() => {
        (async () => {
            setEspecialidades(await getEspecialidades());
        })();
    },[]);


    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" 
                    name="nombre"
                    value={data.nombre} 
                    onChange={(e) => {onChage(e.target)}}/>
                </div>

                <div className="form-group">
                    <label>Especialidad</label>
                    <select  className="form-control" 
                    name="idEspecialidad"
                    value={data.idEspecialidad} 
                    onChange={(e) => {onChage(e.target)}}>
                        <option value={0}>-- Selecciona una especialidad --</option>
                        {especialidades.map(e => <option key={e.idEspecialidad} value={e.idEspecialidad}>{e.nombre}</option>)}
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
        </>
    );
}

export default FormGrupos;