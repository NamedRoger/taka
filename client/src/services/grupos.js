import http from '../helpers/http';

const api_module = '/grupo';

const getGrupos = async () => {
    const {data,status} = await http.get('/grupo');
    if(status >= 300 && status <= 500) throw Error(status);

    return data;
}

const addGrupo = async (grupo) => {
    const {data,status} = await http.post(`${api_module}`,grupo);
    if(status >= 300 && status <= 500) throw Error(status);
    
    return {data,status};
}

const updateGrupo = async (idGrupo,grupo) => {
    const {data,status} = await http.put(`${api_module}/${idGrupo}`,grupo);
    if(status >= 300 && status <= 500) throw Error(status);
    
    return {data,status};
}

const deleteGrupo = async (idGrupo) => {
    const {data,status} = await http.delete(`${api_module}/${idGrupo}`);
    if(status >= 300 && status <= 500) throw Error(status);
    
    return {data,status};
}

export {
    getGrupos,
    deleteGrupo,
    updateGrupo,
    addGrupo
}