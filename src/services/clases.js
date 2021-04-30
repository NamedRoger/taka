import http from '../helpers/http';

const api_module = '/clase';

const getClases = (idPeriodo,idAlumno) => {
    return http.get(`${api_module}/periodo/${idPeriodo}/alumno/${idAlumno}`);
}

const getClase = (idPeriodo, idAlumno, idClase) => {
    return http.get(`${api_module}/periodo/${idPeriodo}/alumno/${idAlumno}/clase/${idClase}`);
}

export {
    getClases,
    getClase
}