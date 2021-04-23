import http from '../helpers/http';

const api_module = '/horario';

const getClases = (idGrupo,idPeriodo) => {
    return http.get(`${api_module}/grupo/${idGrupo}/periodo/${idPeriodo}/clases`);
}

const getClase = (idGrupo,idPeriodo,idClase) => {
    return http.get(`${api_module}/grupo/${idGrupo}/periodo/${idPeriodo}/clases/${idClase}`);
}

const addClase  = (idGrupo,idPeriodo,clase) => {
    return http.post(`${api_module}/grupo/${idGrupo}/periodo/${idPeriodo}/clases`,clase);
}

const updateClase = (idGrupo,idPeriodo,idClase,clase) => {
    return http.put(`${api_module}/grupo/${idGrupo}/periodo/${idPeriodo}/clases/${idClase}`,clase);
}

const removeClase = () => {

}

export {
    addClase,
    updateClase,
    removeClase,
    getClases,
    getClase
}