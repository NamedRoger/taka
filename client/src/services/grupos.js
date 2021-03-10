import http from '../helpers/http';

const getGrupos = async () => {
    const {data,status} = await http.get('/groups');
    if(status >= 300 && status <= 500) throw Error(status);

    return data;
}

export {
    getGrupos
}