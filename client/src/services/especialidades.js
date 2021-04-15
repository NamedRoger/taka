import http from '../helpers/http';

const api_module = '/especialidad';

const getEspecialidades = async () => {
    const {data,status} = await http.get(`${api_module}`);
    if(status >= 300 && status <= 500) throw Error(status);

    return data;
}

const addEspecialidad = async (nuevaEspecialidad) => {
    const {data,status} = await http.post(`${api_module}`,nuevaEspecialidad);
    if(status >= 300 && status <= 500) throw Error(status);
    return {data,status};
}

const updateEspecialidad = async (idEspecialidad,especialidad) => {
    const {data,status} = await http.put(`${api_module}/${idEspecialidad}`,especialidad);
    if(status >= 300 && status <= 500) throw Error(status);
    return {data,status};
}

const deleteEspecialidad = async (idEspecialidad) => {
    const {status} = await http.delete(`${api_module}/${idEspecialidad}`);
    if(status >= 300 && status <= 500) throw Error(status);
    return {status};
}

export {
    getEspecialidades,
    addEspecialidad,
    deleteEspecialidad,
    updateEspecialidad
}