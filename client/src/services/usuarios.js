import http from "../helpers/http";

const api_module = '/users';

const getUsuarios = async () => {
    const {data,status} = await http.get(`${api_module}`);
    if(status <= 300 && status>= 500) throw new Error("algo salió mal");
    return {data,status};
}

const addUsuario = async (usuario) => {
    const {data,status} = await http.post(`${api_module}`,usuario);

    return {data,status};
}

const updateUsuario = async (id,usuario) => {
    const {data,status} = await http.put(`${api_module}/${id}`,usuario);

    return {data,status};
}

const deleteUsuario = async (id) => {
    const {data,status} = await http.delete(`${api_module}/${id}`);

    return {data,status};
}

export {
    getUsuarios,
    addUsuario,
    updateUsuario,
    deleteUsuario
}