import http from '../helpers/http';

const getMaterias = async () => {
    const {data,status} = await http.get('/topics');
    if(status >= 300 && status <= 500) throw Error(status);

    return data;
}

export {
    getMaterias
}