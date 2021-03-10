import React, { useState } from 'react';
import TablaEspecialidad from './TablaEspecialidad';

export default function Especialidad() {
    const [nuevo, setNuevo] = useState('');

    const handleChange = (e) => {
        setNuevo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nuevo);
    }
    return (
        <>
        <div>
            <label htmlFor="inputPassword5" className="form-label">Especialidad</label>
            <input type="text" id="inputPassword5" 
            className="form-control" aria-describedby="passwordHelpBlock" 
            value={nuevo} onChange={handleChange} />
            <button type="submit" class="btn btn-secondary">Guardar</button>
        </div>
        <TablaEspecialidad />
        </>
    )
}
