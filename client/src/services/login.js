import http from "../helpers/http";

export default function login({username,password}){
    return http.post('/auth/login',{username,password}).then(res => {
        if(res.status === 400) throw new Error(res.data.error);
        return res.data.token;    
    });
}