import { useContext, useCallback } from "react";
import Context from '../contexts/UserContext';
import loginService from '../services/login';

export default function useUser(){
    const {jwt,setJwt} = useContext(Context);

    const login = useCallback(({username,password}) => {
        loginService({username,password}).then(res => {
            window.sessionStorage.setItem('token',res);
            setJwt(res);    
        }).catch(err => {
            console.log(err);
        });
    },[setJwt]);

    const logout = useCallback(() => {
        window.localStorage.removeItem('token');
        setJwt(null);
    },[setJwt]);

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}