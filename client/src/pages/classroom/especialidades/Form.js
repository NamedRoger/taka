import React from 'react'

export default function Form({data, onChange, onSubmit,onReset}) {
    return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="inputPassword5" 
                    className="form-label">
                        Especialidad
                    </label>

                    <input type="text" 
                    id="inputPassword5" 
                    className="form-control" 
                    aria-describedby="passwordHelpBlock" 
                    name="name"
                    value={data.name} 
                    onChange={(e) => {onChange(e.target)}} 
                    required/>
                </div>
            <div className="form-group mt-2">
                    <button className="btn btn-success btn-sm" 
                    type="submit">
                        Guardar
                    </button>

                    <button className="btn btn-danger btn-sm" 
                    type="button"
                    onClick={() => {
                        onReset();
                    }}>
                        Cancelar
                    </button>
                </div>
        </form>
    )
}
