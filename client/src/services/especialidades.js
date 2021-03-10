import http from '../helpers/http';

const getEspecialidades = async () => {
    const {data,status} = await http.get('/specialities');
    if(status >= 300 && status <= 500) throw Error(status);

    return data;
}

export {
    getEspecialidades
}