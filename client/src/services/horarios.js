import http from '../helpers/http';

const api_module = '/horario';

const getClases = (idHorario) => {
    return http.get(`${api_module}/${idHorario}/clases`);
}
const addClase  = (idHorario,clase) => {
    return http.post(`${api_module}/${idHorario}/clases`,clase);
}

const updateClase = (idHorario,idClase,clase) => {
    return http.put(`${api_module}/${idHorario}/clases/${idClase}`,clase);
}

const removeClase = () => {

}

export {
    addClase,
    updateClase,
    removeClase,
    getClases
}