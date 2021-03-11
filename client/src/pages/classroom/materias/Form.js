import React from 'react'

export default function Form({data, onChange, onSubmit,onReset}) {
    return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="inputPassword5" className="form-label">Materia</label>
                    <input type="text" id="inputPassword5" 
                    className="form-control" 
                    aria-describedby="passwordHelpBlock" 
                    name="name"
                    value={data.name} 
                    onChange={onChange} />
                </div>
            <div className="form-group mt-2">
            <input type="submit"
                    className="btn btn-success btn-sm"
                    value="Guardar">
                    </input>

                    <button className="btn btn-danger btn-sm" 
                    type="button"
                    >
                        Cancelar
                    </button>
                </div>
        </form>
    )
}
