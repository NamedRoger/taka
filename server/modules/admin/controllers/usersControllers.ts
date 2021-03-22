import { User } from '../models/types.ts';
import * as userServices from '../services/users/userServices.ts';
import {notFound} from '../../../helpers/http/index.ts';
import {hash} from "https://deno.land/x/scrypt/mod.ts";


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
    const password = await hash(newUser.password??'');
    newUser.password = password;
    response.body = newUser.pLastname;
    try{
        const res = await userServices.addUser(newUser);
        newUser.idUser = res.lastInsertId;
        response.status = 201;
        response.body = newUser;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const getUserById =  async ({ request,response,params }: {request:any, response: any,params:any }) => {
    try{
        const user:User = await userServices.getUserById(Number(params.idUser));
        if(user === null || user === undefined) {
            response.status = 404;
        }else{
            response.status = 200;
            response.body = user;
        }
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

const changePassword = async ({request,response,params} : {request:any, response: any, params: any}) => {
    const body = await request.body({type:"json"});
    const {newPassword}:{newPassword:string} = await body.value;
    const idUser = Number(params.idUser)
    try {
        const res = await userServices.changePassword(idUser,newPassword);
        response.status =204;
    } catch (e) {
        response.status = 400;
        response.body ={
            error: e.message
        }

    }
}

export {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    desactiveUser,
    changePassword
}

