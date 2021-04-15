import http from '../helpers/http';

const api_modulue = `/materia`;

const getMaterias = async () => {
    const {data,status} = await http.get('/materia');
    if(status >= 300 && status <= 500) throw Error(status);

    return data;
}

const addMateria = async (materia) => {
    const {data,status} = await http.post(`${api_modulue}`,materia);
    if(status >= 300 && status <= 500) throw Error(status);

    return {data,status};
}

const updateMateria = async (idMateria,materia) => {
    const {data,status} = await http.put(`${api_modulue}/${idMateria}`,materia);
    if(status >= 300 && status <= 500) throw Error(status);

    return {data,status};
}

const desactiveMateria = async (idMateria) => {
    const {data,status} = await http.delete(`${api_modulue}/${idMateria}`);
    if(status >= 300 && status <= 500) throw Error(status);

    return {data,status};
}

export {
    getMaterias,
    addMateria,
    updateMateria,
    desactiveMateria
}