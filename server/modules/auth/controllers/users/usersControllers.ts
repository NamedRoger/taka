import { User } from '../../models/index.ts';
import * as userServices from '../../services/users/userServices.ts';


const getUsers =  async ({ request,response,params }: {request:any, response: any, params:any }) => {
    try{
        const res = await userServices.getUsers();
        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const addUser = async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newUser: User = await body.value;
    newUser.active = true;

    try{
        const res = await userServices.addUser(newUser);
        response.status = 201;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const getUserById =  async ({ request,response,params }: {request:any, response: any,params:any }) => {
    try{
        const res = await userServices.desactiveUser(Number(params.idUser));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const updateUser =  async ({ request,response,params }: {request:any, response: any, params:any }) => {
    try{
        const res:User = await userServices.getUserById(Number(params.users));
        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const desactiveUser =  async ({ request,response,params }: {request:any, response: any, params:any }) => {
    const body = await request.body({type:"json"});
    const newUser: User = await body.value;
    newUser.idUser = Number(params.idUser);
    
    try{
        const res = await userServices.updateUser(newUser);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

export {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    desactiveUser
}

