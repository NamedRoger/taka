import { useContext, useCallback, useState } from "react";
import Context from '../contexts/UserContext';
import loginService from '../services/login';
import jwtDecode from "jwt-decode";

export default function useUser(){
    const {jwt,setJwt} = useContext(Context);
    const [error,setError] = useState({
        error:'',
        success:true
    });
    const {role,unique_name, primarysid} = jwt && jwt !== undefined ?jwtDecode(jwt):"";

    const login = useCallback(({username,password}) => {
        loginService({username,password}).then(res => {
            window.sessionStorage.setItem('token',res);
            setError({
                error:'',
                success:true
            });
            setJwt(res);    
        }).catch(err => {
            setError({
                error:err.response.data,
                success:false
            });
        });
    },[setJwt]);

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('token');
        setJwt(null);
    },[setJwt]);

    return {
        isLogged: Boolean(jwt),
        login,
        logout,
        error,
        role,
        unique_name,
        primarysid
    }
}