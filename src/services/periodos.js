import http from '../helpers/http';

const getPeriodos = async () => {
    const {data,status} = await http.get('/periodo');
    if(status > 300 && status <= 500) throw new Error(status);
    return data;
}

const addPeriod = async(periodo) => {
    const {data,status} = await http.post('/periodo',periodo);
    if(status > 300 && status <= 500) throw new Error(status);
    return {data,status};
}

const updatePeriodo = async (idPeriodo,periodo) => {
    const {data,status} = await http.put('/periodo/'+idPeriodo, periodo);
    if(status > 300 && status <= 500) throw new Error(status);
    return {data,status};
}

const deletePeriodo = async (idPeriodo) => {
    const {status} = await http.delete(`/periodo/${idPeriodo}`);
    if(status > 300 && status <= 500) throw new Error(status);
    return {status};
}

export {
    getPeriodos,
    addPeriod,
    updatePeriodo,
    deletePeriodo
}