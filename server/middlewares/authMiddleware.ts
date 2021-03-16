import {oak} from '../dep.ts';


export const jwtAuth = (
    ctx: oak.Context<Record<string, any>>,
    next: () => Promise<void>) => {
    
    if(1 > 0){
        return;
    }

    next();
}



