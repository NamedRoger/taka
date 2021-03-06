import axios from 'axios';

const API_URL = "http://localhost:8080/api/";
const instance = axios.create({
    baseURL: API_URL,
    proxy: 'http://localhost:8080/api/'
});

instance.interceptors.request.use(
    config => {
        // const { origin } = new URL(config.url);
        // const allowedOrigins = [API_URL];
        const token = window.sessionStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
        // if (allowedOrigins.includes(origin)) {
        //     config.headers.authorization = `Bearer ${token}`;
        // }

        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

export default instance;
