import React,{useEffect,useState} from 'react';


const FormPeriodos = (props) => {
    const initPeriodo = {
        idPeriod:0,
        name:'',
        initDate:'',
        finishDate:''
    }
    const [periodo,setPeriodo] = useState(initPeriodo);


    const setValue = (input)  => {
        const key = input.name;
        setPeriodo({
            ...periodo,
            [key]:input.value
        });

    }

    useEffect(() => {
        setPeriodo(props.data);
    },[props.data]);

    const reset = () => {
        setPeriodo(initPeriodo);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(periodo);
    }
    
    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" 
                    name="name"
                    value={periodo.name} 
                    onChange={(e) => {setValue(e.target)}}/>
                </div>

                <div className="form-group">
                    <label>Fecha Inicio</label>
                    <input type="date" 
                    className="form-control"
                    name="initDate"
                    value={periodo.initDate}
                    onChange={(e) => {setValue(e.target)}}/>
                </div>

                <div className="form-group">
                    <label>Fecha Fin</label>
                    <input type="date" className="form-control"
                    name="finishDate"
                    value={periodo.finishDate}
                    onChange={(e) => {setValue(e.target)}}/>
                </div>

                <div className="form-group mt-2">
                    <button className="btn btn-success btn-sm"
                    role="submit">
                        Guardar
                    </button>

                    <button className="btn btn-danger btn-sm" 
                    role="button"
                    onClick={reset}>
                        Cancelar
                    </button>
                </div>
               
            </form>
        </>
    );
}

export default FormPeriodos;