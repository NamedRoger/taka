import http from "../helpers/http";

const api_module = '/maestro';

const getMaestros = () => {
    return http.get(`${api_module}/`);
}

const getClases = (idMaestro,idPeriodo) => {
    return http.get(`${api_module}/${idMaestro}/periodo/${idPeriodo}/clases`);
}

export {
    getMaestros,
    getClases
}
