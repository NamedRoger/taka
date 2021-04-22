import http from '../helpers/http';

const api_module = '/clase';

const getAlumnos = (idClase) => {
    return http.get(`${api_module}/${idClase}`);
}

export {
    getAlumnos
}