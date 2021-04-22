import http from "../helpers/http";

const api_module = '/maestro';

const getMaestros = () => {
    return http.get(`${api_module}/`);
}

export {
    getMaestros
}
