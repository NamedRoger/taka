import React,{useState} from 'react';

// se crea el contexto
const Context = React.createContext();

export function UserContext({children}){
    const [jwt,setJwt] = useState(() => window.sessionStorage.getItem('token'));

    return (
        <Context.Provider value={{jwt,setJwt}}> 
            {children}
        </Context.Provider>
    );
}

export default Context;