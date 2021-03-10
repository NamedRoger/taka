import http from '../helpers/http';

const getPeriodos = async () => {
    const {data,status,headers} = await http.get('/periods');
    if(status > 300 && status <= 500) throw new Error(status);
    return data;
}

const addPeriod = async(periodo) => {
    const {data,status} = await http.post('/periods',periodo);
    if(status > 300 && status <= 500) throw new Error(status);
    return data;
}


export {
    getPeriodos,
    addPeriod
}