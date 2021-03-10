import React from 'react'

export default function Form({nuevo, handleChange, handleSubmit}) {
    return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="inputPassword5" className="form-label">Especialidad</label>
            <input type="text" id="inputPassword5" 
            className="form-control" aria-describedby="passwordHelpBlock" 
            value={nuevo} onChange={handleChange} />
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
    )
}
