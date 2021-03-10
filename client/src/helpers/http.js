import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080/',
    proxy:'http://localhost:8080/'
});
